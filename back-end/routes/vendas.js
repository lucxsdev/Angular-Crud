const express = require('express');
const router = express.Router();

const vendasController = require('../controllers/vendas');

router.post('/', vendasController.store);

router.get('/', vendasController.show);

router.get('/:id', vendasController.showId);

router.patch('/', vendasController.update);

router.delete('/:id', vendasController.destroy);


module.exports = router;