var express = require('express');
var router = express.Router();

const listsCtrl = require('../controllers/lists');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'To Do List' });
});

router.get('/', listsCtrl.index)

router.get('/:id', listsCtrl.show)

router.get('/:id/edit', listsCtrl.edit)

router.post('/', listsCtrl.create)

router.delete('/:id', listsCtrl.delete)

router.put('/:id', listsCtrl.update)

module.exports = router;
