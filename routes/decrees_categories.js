const express = require('express')
const router = express.Router()
const decreesCategories = require('../database/controllers/decrees_categories')


router.post('/decrees_categories/create', async (req, res) => {
    const { name } = req.body
    const decreesCategory = await decreesCategories.create(name)
    res.json(decreesCategory)
})

router.get('/decrees_categories/findAll', async (req, res) => {
    const decreesCategory = await decreesCategories.findAll()
    res.json(decreesCategory)
})

router.post('/decrees_categories/findOneById', async (req, res) => {
    const { id } = req.body
    const decreesCategory = await decreesCategories.findOneById(id)
    res.json(decreesCategory)
})

router.post('/decrees_categories/update', async (req, res) => {
    const { id, name } = req.body
    const decreesCategory = await decreesCategories.update(id, name)
    res.json(decreesCategory)
})

router.post('/decrees_categories/destroy', async (req, res) => {
    const { id } = req.body
    const decreesCategory = await decreesCategories.destroy(id)
    res.json(decreesCategory)
})

module.exports = router
