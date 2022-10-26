const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req,res) => {
    db.getBlog()
    .then((blog) => {
        console.log(blog)
        res.json(blog)
    })
    .catch((err) => {
        console.log(err.message)
    })
})

router.post('/',(req, res) => {
    
  
    const {title, summary, post} = req.body
    const data = {title, summary, post}
    db.newBlog(data)
        .then((idArr) => {
            const id = idArr[0]
            db.getOneBlog(id)
            .then ((oneBlog) => {
              res.json(oneBlog)
            })
            .catch((err) => {
                console.log(err.message) 
            })
        })
        .catch((err) => {
            console.log(err.message) 
        })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    db.delBlog(id)
    .then(() => {
        db.getBlog()
        .then((blog) => {
            res.json(blog)
        })
        .catch((err) => {
            console.log(err.message) 
        })
    })
    .catch((err) => {
        console.log(err.message) 
    })
})

module.exports = router