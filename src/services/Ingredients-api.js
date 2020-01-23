const BASE_URL = '/api/ingredients';

export default {
    getAll,
    create,
    update,
    deleteOne

}
async function getAll() {
    return await (await fetch(BASE_URL)).json();
}

function create(ingredient) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(ingredient)
    }).then(res => res.json());
}

function update(ingredient) {
    return fetch(`${BASE_URL}/${ingredient._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(ingredient)
    }).then(res => res.json());
}
function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

