import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Recipe.css"

const Recipe = ({ favourites = [], setFavourites }) => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    // for fetching the recipe
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/recipes');
                const recipesData = response.data.data;
                setRecipes(recipesData);
            } catch (error) {
                console.log('Recipes not fetched', error);
            }
        };
        fetchRecipes();
    }, []);

    // for handling the like
    const handleLike = async (id) => {
        try {
            const response = await axios.post('http://localhost:9000/api/favourites', { recipeId: id });
            console.log(response)
            if (response.status === 200) {
                const updatedRecipe = response.data.data;
                console.log(updatedRecipe)
                
                if (!favourites.includes(id) && updatedRecipe.likes >= 1) {
                    setFavourites([...favourites, id]);
                }
                alert("Recipe added to favourites!");
            }
        } catch (error) {
            console.error('Error updating favourites:', error);
            alert('Error adding to favourites.');
        }
    };

    const getShortIngredients = (ingredients, limit = 3) => {
        return ingredients.length > limit 
            ? ingredients.slice(0, limit).join(', ') + ', ...'
            : ingredients.join(', ');
    };

    return (
        <div className='content'>
            {recipes.map((recipe) => (
                <div className='recipe-box' key={recipe._id}>
                    <img className='recipe-image' src={recipe.image} alt={recipe.title} />
                    <div className='recipe-details'>
                        <h2 className='recipe-title'>{recipe.title}</h2>
                        <p><strong>Ingredients:</strong> {getShortIngredients(recipe.ingredients)}</p>
                        <p><strong>Dietary Preferences</strong> {recipe.dietaryPreferences}</p>
                        <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                    </div>
                    <div className='recipe-footer'>
                        <button className='like-button' onClick={() => handleLike(recipe._id)} style={{ color: favourites.includes(recipe._id) ? 'rgba(184, 48, 48, 0.575)' : 'white' }}>
                            ♥
                        </button>
    
                        <button className='recipe-button' onClick={() => navigate(`/recipe/${recipe._id}`)}>View</button>
                    </div>
                </div>
            ))}
        </div>
    );
    
};

export default Recipe;
