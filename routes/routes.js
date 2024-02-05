const express = require('express')
const router = express.Router()
const routes = require('../database/controllers/routes')


router.post('/routes/create', async (req, res) => {
    const { name, url } = req.body
    const route = await routes.create(name, url)
    res.json(route)
})

router.get('/routes/findAll', async (req, res) => {
    const route = await routes.findAll()
    res.json(route)
})

router.get('/routes/findOneById', async (req, res) => {
    const { id } = req.body
    const route = await routes.findOneById(id)
    res.json(route)
})

router.post('/routes/update', async (req, res) => {
    const { id, name, url } = req.body
    const route = await routes.update(id, name, url)
    res.json(route)
})

router.post('/routes/destroy', async (req, res) => {
    const { id } = req.body
    const route = await routes.destroy(id)
    res.json(route)
})

module.exports = router