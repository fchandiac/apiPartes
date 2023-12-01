const express = require('express')
const router = express.Router()
const decrees = require('../database/controllers/decrees')


router.post('/decrees/create', async (req, res) => {
    const { type, matter, date, attachment_id, category_id, department_id, user_id } = req.body
    const decree = await decrees.create(type, matter, date, attachment_id, category_id, department_id, user_id)
    res.json(decree)
})

router.get('/decrees/findAll', async (req, res) => {
    const decree = await decrees.findAll()
    res.json(decree)
})

router.post('/decrees/findAllByYear', async (req, res) => {
    const { year } = req.body
    const decree = await decrees.findAllByYear(year)
    res.json(decree)
})

router.post('/decrees/findAllBeteenDatesAndType', async (req, res) => {
    const { start, end, type } = req.body
    const decree = await decrees.findAllBeteenDatesAndType(start, end, type)
    res.json(decree)
})

module.exports = router
