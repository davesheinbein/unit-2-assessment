var express = require('express');
var router = express.Router();

const listsCtrl = require('../controllers/lists');

router.get('/', listsCtrl.index);

router.post('/', listsCtrl.create);

router.delete('/:id', listsCtrl.deleteItem);

// router.get('/', listsCtrl.newItem);

// router.get('/', listsCtrl.show);

// router.get('/:id', listsCtrl.edit);

// router.put('/:id/new', listsCtrl.update);

module.exports = router;
