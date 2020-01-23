var express = require('express');
var router = express.Router();
var ingredientsCtrl = require('../../controllers/ingredients');

/* GET /api/ingredients */
router.get('/', ingredientsCtrl.index);
router.get('/:id', ingredientsCtrl.show);
router.post('/', ingredientsCtrl.create);
router.delete('/:id', ingredientsCtrl.delete);
router.put('/:id', ingredientsCtrl.update);

module.exports = router;
