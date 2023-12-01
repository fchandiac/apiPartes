const express = require('express')
const router = express.Router()
const users = require('../database/controllers/users')




router.get('/users/findAll', async (req, res) => {
    const user = await users.findAll()
    res.json(user)
})

router.post('/users/findOneById', async (req, res) => {
    const { id } = req.body
    const user = await users.findOneById(id)
    res.json(user)
})


router.post('/users/create', async (req, res) => {
    const { user_name, name, pass, profile_id, } = req.body
    const user = await users.create(user_name, name, pass, profile_id, )
    res.json(user)
})

router.post('/users/update', async (req, res) => {
    const { id, user_name, name, profile_id, } = req.body
    const user = await users.update(id, user_name, name, profile_id, )
    res.json(user)
})

router.post('/users/updatePass', async (req, res) => {
    const { id, pass } = req.body
    const user = await users.updatePass(id, pass)
    res.json(user)
})


router.post('/users/findOneByUserName', async (req, res) => {
    const { user_name } = req.body
    const user = await users.findOneByUserName(user_name)
    res.json(user)
})



router.get('/users/findAllRecipients', async (req, res) => {
    const user = await users.findAllRecipients()
    res.json(user)
})



module.exports = router