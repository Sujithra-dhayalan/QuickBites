const express = require('express')
const router = express.Router()
const {add_recipe, get_recipe, search_recipe, specific_recipe, get_favourites, add_to_favourites} = require('../controllers/recipeController')

router.post('/search-recipes',search_recipe)
router.post('/new-recipe',add_recipe)

router.get('/recipes',get_recipe)

router.get('/recipes/favourites', get_favourites); 
router.get('/recipes/:id',specific_recipe)

 

router.post('/favourites', add_to_favourites);

module.exports = router 