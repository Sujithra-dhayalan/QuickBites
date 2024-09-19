import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/SearchResults.css";
import bake from '../assets/bake.png';

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract 'data' from the 'recipes' object
  const { recipes } = location.state || {};
  const recipeList = recipes?.data || [];  // Make sure to access 'recipes.data'

  console.log("Received recipes:", recipes); // Debugging log to check

  return (
    <div className='content'>
      {recipeList.length > 0 ? (
        recipeList.map((recipe) => (
          <div className='recipe-box' key={recipe._id}>
            <img className="recipe-image" src={recipe.image} alt={recipe.title} />
            <div>
              <h2 className="recipe-title">{recipe.title}</h2>
              <p><strong>Ingredients:</strong> {recipe.ingredients ? recipe.ingredients.join(', ') : 'No ingredients available'}</p>
              <p><strong>Dietary Preferences</strong> {recipe.dietaryPreferences}</p>
              <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
              <button className="recipe-button" onClick={() => navigate(`/recipe/${recipe._id}`)}>View</button>
            </div>
          </div>
        ))
      ) : (
        <div className='no-recipes'>
          <h4>Opsie! We don't have any recipes right now, but you can add it! Come on!</h4>
          <img src={bake} alt="food" />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
