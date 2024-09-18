import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/AddRecipe.css"
import cookie from "../assets/cookie.png"

// efor adding new recipe
const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    // basically empties the form
    title: '',
    ingredients: '',
    description: '',
    image: '',
    dietaryPreferences: '',
    cookingTime: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/new-recipe', recipe);
      alert(response.data.message);
      navigate('/'); //navigates back to the home page
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Error adding recipe');
    }
  };

  return (
    <>
    <div className='upper-text'>
    <h4>Don't be shy! Add your recipe </h4>
    <img src={cookie} className='cookie'/>
    </div>
    
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          placeholder="Ingredients (comma separated)"
          required
        />
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="image"
          value={recipe.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="dietaryPreferences"
          value={recipe.dietaryPreferences}
          onChange={handleChange}
          placeholder="Dietary Preferences"
        />
        <input
          type="number"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
          placeholder="Cooking Time (in minutes)"
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
    </>
  );
};

export default AddRecipe;
