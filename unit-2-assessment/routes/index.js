var express = require('express');
var router = express.Router();

const listsCtrl = require('../controllers/lists');


router.get('/', listsCtrl.index);

router.post('/', listsCtrl.create);

router.delete('/:id', listsCtrl.deleteItem);


module.exports = router;
