var express = require('express');
var router = express.Router();

const listsCtrl = require('../controllers/lists');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'To Do List'});
// });

router.get('/', listsCtrl.index);

router.get('/', listsCtrl.newItem);

router.get('/', listsCtrl.show);

router.get('/:id', listsCtrl.edit);

router.post('/', listsCtrl.create);

router.delete('/:id/new', listsCtrl.deleteItem);

router.put('/:id/new', listsCtrl.update);

module.exports = router;
