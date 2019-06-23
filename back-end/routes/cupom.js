const express = require('express');
const router = express.Router();

const cupomController = require('../controllers/cupom');

router.post('/', cupomController.store);

router.get('/', cupomController.show);

router.get('/:id', cupomController.showId);

router.patch('/', cupomController.update);

router.delete('/:id', cupomController.destroy);


module.exports = router;