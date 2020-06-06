const listDB = require('../models/list')

module.exports = {
    index,
    create,
    deleteItem
}

function index(req, res) {
    res.render('lists/index', {
        lists: listDB.getAll()
    });
}

function create(req, res) {
    console.log(req.body, 'req.body');
    listDB.create(req.body);
    res.redirect('/');
}

function deleteItem(req, res) {
    listDB.deleteOne(req.params.id);
    res.redirect('/');
}
