const Recipe = require('../models/recipeSchema')


// for adding new recipes 
const add_recipe = async (req, res) => {
    try {
        const recipe = new Recipe({
            title: req.body.title,
            ingredients: req.body.ingredients,
            description: req.body.description,
            image: req.body.image,
            dietaryPreferences: req.body.dietaryPreferences,
            cookingTime: req.body.cookingTime
        })

        const newRecipe = await recipe.save()

        if (newRecipe) {
            res.status(200).send({
                message: "Recipe added successfully",
                data: newRecipe
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Internal server error"
        })
    }
}

// for displaying all the recipes
const get_recipe = async (req,res) =>{
    try{
        const recipeList = await Recipe.find()
        res.status(200).send({
            message: "Recipes fetched successfully",
            data: recipeList
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({message: "Internal server error"})
    }
}

// for searching a particular recipe by getting the ingredients from the user. 
const search_recipe = async (req,res) =>{
    try{
        const {ingredients} = req.body

        const recipes = await Recipe.find()
        
        const matchedRecipe = recipes.filter(recipe=>{
            const recipeIngredients = recipe.ingredients.map(i=>i.toLowerCase())
            return ingredients.every(i=>recipeIngredients.includes(i.toLowerCase()))
        })

        res.status(200).json(matchedRecipe)
        res.send({
            message: "Recipes that match your ingredients"
        })
    }
    catch(error){
        res.status(500).send({
            message: "Internal Server error"
        })
        console.log(error)
    }
}

// for specific recipes {view button}
const specificRecipe = async (req,res) =>{
    const recipe = await Recipe.findById(req.params.id)

    if (!recipe){
        return res.status(404).send({message:'Recipe not found'})
        res.json({data: recipe});
    }
}

module.exports = {add_recipe, get_recipe, search_recipe, specificRecipe}