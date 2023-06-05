const express = require('express')
const router = express.Router()
const uuld = require('uuid')
let users = require('../../Users')

//get all users
router.get('/', (req,res) => {
    res.json(users);
});

//get user by id
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))

    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
        res.sendStatus(400);
    }
})

module.exports = router