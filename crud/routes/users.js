const express = require('express');
const router = express.Router();
const crudController = require('../controllers/dataController');

router.post('/', crudController.createData);
router.get('/', crudController.getData);
router.put('/:id', crudController.updateData);
router.delete('/:id', crudController.deleteData);

module.exports = router;

