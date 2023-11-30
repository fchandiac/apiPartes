const express = require('express')
const router = express.Router()
const users = require('../database/controllers/users')


router.post('/users/create', async (req, res) => {
    const { mail, pass, profile_id, city_id, category_id, dni, phone, state } = req.body
    const user = await users.create(mail, pass, profile_id, city_id, category_id, dni, phone, state)
    res.json(user)
})

router.get('/users/findAll', async (req, res) => {
    const user = await users.findAll()
    res.json(user)
})

router.post('/users/findOneByMail', async (req, res) => {
    const { mail } = req.body
    const user = await users.findOneByMail(mail)
    res.json(user)
})

router.post('/users/findOneById', async (req, res) => {
    const { id } = req.body
    const user = await users.findOneById(id)
    res.json(user)
})

router.post('/users/findAllUsersByProfileCategoryAndCity', async (req, res) => {
    const { profile_id, category_id, city_id } = req.body
    const user = await users.findAllUsersByProfileCategoryAndCity(profile_id, category_id, city_id)
    res.json(user)
})

router.post('/users/updateProfile', async (req, res) => {
    const { id, profile_id } = req.body
    const user = await users.updateProfile(id, profile_id)
    res.json(user)
})

module.exports = router