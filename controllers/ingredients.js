const Ingredient = require('../models/ingredient');

module.exports = {
    create,
    index,
    show,
    delete: deleteOne,
    update
};

async function create(req, res) {
    const ingredient = await Ingredient.create(req.body);
    res.status(201).json(ingredient);
}

async function index(req, res) {
    const ingredients = await Ingredient.find({});
    res.status(200).json(ingredients);
}

async function show(req, res) {
    const ingredient = await Ingredient.findById(req.params.id);
    res.status(200).json(ingredient);
}

async function deleteOne(req, res) {
    const deletedIngredient = await Ingredient.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedIngredient);
}

async function update(req, res) {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedIngredient);
}
