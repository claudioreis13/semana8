const express = require('express');
const router = express.Router();
const produtoController =
require('../controllers/produtoController');
/* GET clientes*/
router.get('/', produtoController.findAll);
/* POST clientes*/
router.post('/', produtoController.save);
/* PUT clientes*/
router.put('/', produtoController.update);
/* DELETE clientes*/
router.delete('/', produtoController.remove);
module.exports = router;
