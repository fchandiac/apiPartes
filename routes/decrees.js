const express = require('express')
const router = express.Router()
const decrees = require('../database/controllers/decrees')


router.post('/decrees/create', async (req, res) => {
    const { type, matter, date, attachment_id, category_id, department_id, user_id, third, sensitive, classification_id } = req.body
    const decree = await decrees.create(type, matter, date, attachment_id, category_id, department_id, user_id, third, sensitive, classification_id)
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


router.post('/decrees/findAllBeteenDates', async (req, res) => {
    const { start, end } = req.body
    const decree = await decrees.findAllBeteenDates(start, end)
    res.json(decree)
})


router.post('/decrees/updateAttachment', async (req, res) => {
    const { id, attachment_id } = req.body
    const decree = await decrees.updateAttachment(id, attachment_id)
    res.json(decree)
})

router.post('/decrees/findOneById', async (req, res) => {
    const { id } = req.body
    const decree = await decrees.findOneById(id)
    res.json(decree)
})


router.post('/decrees/update', async (req, res) => {
    const { id, type, matter, date, category_id, department_id, third, sensitive, classification_id } = req.body
    const decree = await decrees.update(id, type, matter, date, category_id, department_id, third, sensitive, classification_id)
    res.json(decree)
})


router.post('/decrees/findOneById', async (req, res) => {
    const { id } = req.body
    const decree = await decrees.findOneById(id)
    res.json(decree)
})
 

router.post('/decrees/findAllBeteenDatesTypeAndClassification', async (req, res) => {
    const { start, end, type, classification_id } = req.body
    const decree = await decrees.findAllBeteenDatesTypeAndClassification(start, end, type, classification_id)
    res.json(decree)
})


module.exports = router
