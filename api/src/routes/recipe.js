const { Router } = require("express");
const router = Router();
const { getRecipes, getIdRecipe, newRecipe } = require("../controllers/recipe");

router.get("/", getRecipes);
router.get("/:id", getIdRecipe);
router.post("/", newRecipe);

module.exports = router;
