import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/Fullrecipe.css'
const FullRecipe = () => {
  const { id } = useParams(); // Get recipe ID from URL params
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/recipes/${id}`);
        console.log(response.data.data)
        setRecipe(response.data.data);
      } catch (error) {
        console.log("Error fetching the recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  // Render nothing if recipe is null (still fetching)
  if (!recipe) {
    return null;
  }

  return (

    <div >
      <h1 className='recipe-title'>{recipe.title}</h1>
      <div className='whole-box'>

        <div className='words'>
          
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
          <h4>Instruction: </h4>
          <p>{recipe.description}</p>
          <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
        </div>
        <div>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>


    </div>
  );
}

export default FullRecipe;
