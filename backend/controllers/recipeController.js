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

        res.status(200).json({
             message: "Recipes that match your ingredients",
             data: matchedRecipe
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
const specific_recipe = async (req, res) => {
    try {
      
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json({ data: recipe });
  
    } catch (error) {
      console.error('Error fetching recipe:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
  
 
  

// For saving favourites
const add_to_favourites = async (req, res) => {
  try {
      const { recipeId } = req.body;
      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
          return res.status(404).json({ message: 'Recipe not found' });
      }
      recipe.likes += 1;
      await recipe.save();
      res.status(200).json({ message: 'Recipe added to favourites', data: recipe });
  } catch (error) {
      console.error('Error adding to favourites:', error);
      res.status(500).send('Internal server error');
  }
};

// for fetching favorite recipes
const get_favourites = async (req, res) => {
  try {
    
    const favouriteRecipes = await Recipe.find({ likes: { $gte: 1 } }); // Fetch recipes with at least one like
    res.status(200).json({ data: favouriteRecipes });
      
  } catch (error) {
      console.error('Error fetching favourites:', error);
      res.status(500).send('Internal server error');
  }
};



module.exports = {add_recipe, get_recipe, search_recipe, specific_recipe, add_to_favourites, get_favourites}