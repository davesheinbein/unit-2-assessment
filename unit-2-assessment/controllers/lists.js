const listDB = require('../models/list')

module.exports = {
    index,
    show,
    newItem,
    create,
    deleteItem,
    edit,
    update
}

function index(req, res) {
    res.render('/', {
        lists: listDB.getAll()
    })
}

function show(req, res) {
    console.log(req.params, '<---- req.params');
    res.render('/', {
        list: listDB.getOne(req.params.id)
    })
}

function newItem(req, res) {
    res.render('/');
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

function edit(req, res) {
    const list = listDB.getOne(req.params.id);
    res.render('/', { list })
}

function update(req, res) {
    listDB.update(req.params.id, req.body);
    res.redirect(`/${req.params.id}`);
}