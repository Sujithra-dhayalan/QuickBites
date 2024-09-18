import { useState, useEffect } from 'react';
import axios from 'axios';

const Favourites = ({ favourites }) => {
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/recipes/favourites');

                setFavouriteRecipes(response.data.data); // Correctly handle the data
            } catch (error) {
                console.log('Error fetching favourite recipes', error);
            }
        };
        fetchFavourites();
    }, []);
     // Only fetch once when component mounts
    

     return (
        <div className='content'>
            {favouriteRecipes.map((recipe) => (
                <div className='recipe-box' key={recipe._id}>
                    <img className='recipe-image' src={recipe.image} alt={recipe.title} />
                    <div>
                        <h2 className='recipe-title'>{recipe.title}</h2>
                        <p>
                            <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                        </p>
                        <p>
                            <strong>Cooking Time:</strong> {recipe.cookingTime} mins
                        </p>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Favourites;
