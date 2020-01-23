var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    name: { type: String, required: true },
    expiration: { type: Date, required: true },
    description: String,
    owner: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Ingredient', ingredientSchema)