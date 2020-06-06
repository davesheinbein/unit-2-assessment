const lists = [
    { id: 1000001, list: 'Orange', done: true },
    { id: 1000002, list: 'Apple', done: false },
    { id: 1000003, list: 'Gum', done: false },
    { id: 1000004, list: 'Orange Juice', done: true },
    { id: 1000005, list: 'Penutbutter', done: true }
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return lists;
}

function getOne(id) {
    return lists.find(list => list.id === parseInt(id));
}

function create(list) {
    list.id = Date.now() % 1000000;
    lists.push(list);
}

function deleteOne(id) {
    const idx = lists.findIndex(list => list.id === parseInt(id));
    console.log("<---- IDX", idx)
    lists.splice(idx, 1);
}
