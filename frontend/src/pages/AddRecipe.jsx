import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/AddRecipe.css"

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
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
      navigate('/'); // Redirect to home or another page after successful submission
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Error adding recipe');
    }
  };

  return (
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
  );
};

export default AddRecipe;
