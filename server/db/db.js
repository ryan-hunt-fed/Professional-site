const con = require('./connection')

function getBlog(db = con) {
    return db('blog')
    
}

function newBlog(data, db=con) {
    return db('blog')
    .insert(data)
}

function getOneBlog(id, db=con) {
    return db('blog')
    .select()
    .where('id',id)
    .first()
}

function delBlog(id, db=con){
    return db('blog')
    .del()
    .where('id',id)
}

module.exports = {
    getBlog,
    newBlog,
    getOneBlog,
    delBlog
    
}