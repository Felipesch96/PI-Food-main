const { Router } = require('express');
const router= Router();
const { getDiets } = require("../controllers/diet")

router.get("/", getDiets);


module.exports = router;