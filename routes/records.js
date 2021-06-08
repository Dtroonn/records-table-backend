const { Router } = require('express');

const RecordController = require('../controllers/record');

const router = Router();

router.get('/', RecordController.getAll);

router.post('/', RecordController.create);

router.put('/', RecordController.update);

router.delete('/:id', RecordController.delete);

module.exports = router;
