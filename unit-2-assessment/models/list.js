const lists = [
    { id: 100001, items: "Bananas" },
    { id: 100002, items: "Apples" },
    { id: 100003, items: "Squash" },
    { id: 100004, items: "Cake" }
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return lists;
}

function getOne(id) {
    return lists.find(list => list.id === parseInt(id));
}

function create(list) {
    list.id = Date.now() % 1000000;
    list.item = '';
    lists.push(list);
}

function deleteOne(id) {
    const idx = skills.findIndex(list => list.id === parseInt(id));
    console.log("<---- IDX", idx)
    lists.splice(idx, 1);
}

function update(id, list) {
    const listObj = lists.find(l => l.id === parseInt(id));
    console.log(listObj, '<---- listObj');
    Object.assign(listObj, list);
}