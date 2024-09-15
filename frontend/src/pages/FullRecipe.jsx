import '../styles/Fullrecipe.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");
//   const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/recipes/${id}`);
        console.log(response.data);
        setRecipe(response.data); // Set the recipe data
      } catch (error) {
        console.log(error);
      } 
    };
    fetchRecipe();
  }, [id]);

  // Show loading text while the recipe is being fetched
//   if (loading) {
//     return <p>Loading...</p>;
//   }

  // If no recipe is found, display an appropriate message
//   if (!recipe) {
//     return <p>No recipe found.</p>;
//   }

  return (
    <>
      <h1>{recipe.title}</h1>
      <div className='whole-box'>
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <h3>Cooking time</h3>
          <p>{recipe.cookingTime} mins</p>
        </div>
        <div>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>
    </>
  );
};

export default FullRecipe;
