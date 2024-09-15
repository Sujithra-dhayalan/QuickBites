
import '../styles/Recipe.css'
import { useState, useEffect } from 'react'
import axios from "axios"
import food from "../assets/food.png"
import { Link } from 'react-router-dom'
const Recipe = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("http://localhost:9000/api/recipes")
                console.log(response.data)
                setRecipes(response.data.data)
            } catch (error) {
                console.log(error)
                console.log("Recipes not fetched")
            }
        }
        fetchRecipes()
    }, [])

    return (
        <div className='content'>
            {recipes.map((recipe) => (
                <div className='recipe-box' key={recipe._id}>
                    <img className="recipe-image" src={recipe.image} alt={recipe.title} />
                    <div >
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <h4>Ingredients: {recipe.ingredients.join(", ")}</h4>
                        <h4>Cooking Time: {recipe.cookingTime} mins</h4>
                        <Link to={`/recipe/${recipe._id}`}>
                            <button className="recipe-button" >view</button>
                        </Link>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Recipe