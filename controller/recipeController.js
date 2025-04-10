const Recipe = require("../model/recipeSchema");

exports.postrecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const resp = new Recipe({ title, ingredients, instructions });
    await resp.save();
    if (!resp) return res.status(404).send("Recipe not created");
    res.status(200).json({ message: "Recipe Created sucessfully!", resp });
  } catch (err) {
    console.log("Posted Error!");
  }
};

exports.getrecipe = async (req, res) => {
  try {
    const response = await Recipe.find();
    if (!response) return res.status(404).send("Recipe not found");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error in fetching the data");
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipeId = await Recipe.findById(req.params.id);
    if (!recipeId) return res.status(404).send("Recipe not found");
    res.status(200).json(recipeId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!recipe)
      return res.status(404).json({ error: "Recipe not found for update" });
    res.status(200).json({ message: "Recipe updated successfully!", recipe });
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
