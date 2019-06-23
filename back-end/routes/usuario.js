const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario');

router.post('/', usuarioController.store);

router.get('/', usuarioController.show);

router.get('/:id', usuarioController.showId);

router.patch('/', usuarioController.update);

router.delete('/:id', usuarioController.destroy);


module.exports = router;