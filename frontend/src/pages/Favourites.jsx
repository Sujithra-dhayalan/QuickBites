import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import cookie from '../assets/wink.png'
const Favourites = ({ favourites }) => {
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);
    const navigate = useNavigate()

    // this basically gets the data from the get-favourites function of the backend
    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/recipes/favourites'); //fetches only the liked recipes
                setFavouriteRecipes(response.data.data);
            } catch (error) {
                console.log('Error fetching favourite recipes', error);
            }
        };
        fetchFavourites();
    }, []);



    return (
        <>
        <div className='upper-text'>
                <h4>Tadaaaa! Here's your favies!! </h4>
                <img src={cookie} className='cookie' alt='cookie'/>
            </div>
        <div className='content'>
            
            <br />
            {favouriteRecipes.map((recipe) => (
                <div className='recipe-box' key={recipe._id}>
                    <img className='recipe-image' src={recipe.image} alt={recipe.title} />
                    <div>
                        <h2 className='recipe-title'>{recipe.title}</h2>
                        <p>
                            <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                        </p>
                        <p><strong>Dietary Preferences</strong> {recipe.dietaryPreferences}</p>
                        <p>
                            <strong>Cooking Time:</strong> {recipe.cookingTime} mins
                        </p>
                        <button className='recipe-button' onClick={() => navigate(`/recipe/${recipe._id}`)}>View</button>

                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Favourites;
