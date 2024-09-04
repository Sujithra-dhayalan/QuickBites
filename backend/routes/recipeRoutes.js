const express = require('express')
const router = express.Router()
const {add_recipe, get_recipe, search_recipe} = require('../controllers/recipeController')

router.post('/new-recipe',add_recipe)
router.get('/recipes',get_recipe)
router.post('/search-recipes',search_recipe)

module.exports = router