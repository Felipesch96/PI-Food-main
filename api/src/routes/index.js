const { Router } = require("express");
const recipe = require("./recipe");
const diet = require("./diet");

const router = Router();

router.use("/recipes", recipe);
router.use("/diets", diet);

module.exports = router;
