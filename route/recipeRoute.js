const express = require("express");
const router = express.Router();
const receipeController = require("../controller/recipeController");

router.post("/", receipeController.postrecipe);
router.get("/", receipeController.getrecipe);
router.get("/:id", receipeController.getRecipeById);
router.put("/:id", receipeController.updateRecipe);
router.delete("/:id", receipeController.deleteRecipe);

module.exports = router;
