const express = require('express')
const router = express.Router()
const profiles = require('../database/controllers/profiles')


router.post('/profiles/create', async (req, res) => {
    const { name } = req.body
    const profile = await profiles.create(name)
    res.json(profile)
})

router.get('/profiles/findAll', async (req, res) => {
    const profile = await profiles.findAll()
    res.json(profile)
})

module.exports = router