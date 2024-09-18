import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/SearchResults.css";

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { recipes } = location.state || { recipes: [] };

  return (
    <div className='content'>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div className='recipe-box' key={recipe._id}>
            <img className="recipe-image" src={recipe.image} alt={recipe.title} />
            <div>
              <h2 className="recipe-title">{recipe.title}</h2>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
              <button className="recipe-button" onClick={() => navigate(`/recipe/${recipe._id}`)}>View</button>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default SearchResult;
