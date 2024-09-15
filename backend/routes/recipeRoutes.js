const express = require('express')
const router = express.Router()
const {add_recipe, get_recipe, search_recipe, specificRecipe} = require('../controllers/recipeController')

router.post('/new-recipe',add_recipe)
router.get('/recipes',get_recipe)
router.post('/search-recipes',search_recipe)
router.get('/recipes/:id',specificRecipe)
module.exports = router 