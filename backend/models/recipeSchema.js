const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    dietaryPreferences: {
        type: String
    },
    cookingTime: {
        type: Number
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("recipes",recipeSchema);