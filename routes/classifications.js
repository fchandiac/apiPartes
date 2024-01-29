const express = require('express')
const router = express.Router()
const classifications = require('../database/controllers/classifications')


router.post('/classifications/create', async (req, res) => {
    const { name } = req.body
    const classification = await classifications.create(name)
    res.json(classification)
})

router.get('/classifications/findAll', async (req, res) => {
    const classification = await classifications.findAll()
    res.json(classification)
})

router.get('/classifications/findOneById', async (req, res) => {
    const { id } = req.body
    const classification = await classifications.findOneById(id)
    res.json(classification)
})

router.post('/classifications/update', async (req, res) => {
    const { id, name } = req.body
    const classification = await classifications.update(id, name)
    res.json(classification)
})

router.post('/classifications/destroy', async (req, res) => {
    const { id } = req.body
    const classification = await classifications.destroy(id)
    res.json(classification)
})

module.exports = router
