const db = require('./db-Config');

module.exports = {
    find,
    findById,
    findPosts,
    add
    //update
    //remove

}


function find() {
    return db("users");
}

function findById(id) {
    return db('users')
    .where ({id});
}

function findPosts(user_id) {
    return db("posts as p ")
    .join('users as u', 'u.id',  'p.user_id' )
    .select('p.id', 'p.username', 'p.contents')
    .where({user_id});
}

async function add(user) {
    const [id] = db('users').insert(user);
    console.log(id);
    return findById(id);
}