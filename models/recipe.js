const mongoose = require("mongoose");
const recipeSchema = mongoose.Schema({
    foodName: String,
    ingredients: Array,
    instructions: String,
   
});

module.exports = mongoose.model("Recipe", recipeSchema);
