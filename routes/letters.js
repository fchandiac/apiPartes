const express = require('express')
const router = express.Router()
const letters = require('../database/controllers/letters')

router.post('/letters/create', async (req, res) => {
    const { matter, recipient, job_title_id, type, user_id, attachment_id } = req.body
    const letter = await letters.create(matter, recipient, job_title_id, type, user_id, attachment_id)
    res.json(letter)
})

router.get('/letters/findAll', async (req, res) => {
    const letter = await letters.findAll()
    res.json(letter)
})

router.post('/letters/findAllBeteenDates', async (req, res) => {
    const { start, end } = req.body
    const letter = await letters.findAllBeteenDates(start, end)
    res.json(letter)
})

router.post('/letters/updateAttachment', async (req, res) => {
    const { id, attachment_id } = req.body
    const letter = await letters.updateAttachment(id, attachment_id)
    res.json(letter)
})


router.post('/letters/findOneById', async (req, res) => {
    const { id } = req.body
    const letter = await letters.findOneById(id)
    res.json(letter)
})


router.post('/letters/update', async (req, res) => {
    const { id, matter, recipient, job_title_id, type } = req.body
    const letter = await letters.update(id, matter, recipient, job_title_id, type)
    res.json(letter)
})

module.exports = router