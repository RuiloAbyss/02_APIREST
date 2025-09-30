const express = require('express');
const userController = require('../controllers/user.controller'); 
//si usas control + ckick en user.controller.js te lleva al archivo sino está mal

const router = express.Router();

router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;