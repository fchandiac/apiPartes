const express = require('express')
const router = express.Router()
const departments = require('../database/controllers/departments')



router.post('/departments/create', async (req, res) => {
    const { name } = req.body
    const department = await departments.create(name)
    res.json(department)
})

router.get('/departments/findAll', async (req, res) => {
    const department = await departments.findAll()
    res.json(department)
})

router.post('/departments/findOneById', async (req, res) => {
    const { id } = req.body
    const department = await departments.findOneById(id)
    res.json(department)
})

router.post('/departments/update', async (req, res) => {
    const { id, name } = req.body
    const department = await departments.update(id, name)
    res.json(department)
})

router.post('/departments/destroy', async (req, res) => {
    const { id } = req.body
    const department = await departments.destroy(id)
    res.json(department)
})

module.exports = router