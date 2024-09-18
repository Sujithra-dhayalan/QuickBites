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
    likes:{
        type:Number,
        default:0
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("recipes",recipeSchema);