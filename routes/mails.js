const express = require('express')
const router = express.Router()
const mails = require('../database/controllers/mails')


router.post('/mails/create', async (req, res) => {
    const { matter, external, sender, date, reference_id, user_id, attachment_id, department_id } = req.body
    const mail = await mails.create(matter, external, sender, date, reference_id, user_id, attachment_id, department_id)
    res.json(mail)
})

router.get('/mails/findAll', async (req, res) => {
    const mail = await mails.findAll()
    res.json(mail)
})

router.post('/mails/findAllBeteenDates', async (req, res) => {
    const { start, end } = req.body
    const mail = await mails.findAllBeteenDates(start, end)
    res.json(mail)
})

router.post('/mails/findOneById', async (req, res) => {
    const { id } = req.body
    const mail = await mails.findOneById(id)
    res.json(mail)
})

router.post('/mails/updateAttachment', async (req, res) => {
    const { id, attachment_id } = req.body
    const mail = await mails.updateAttachment(id, attachment_id)
    res.json(mail)
})


router.post('/mails/update', async (req, res) => {
    const { id, matter, external, sender, date, reference_id, department_id } = req.body
    const mail = await mails.update(id, matter, external, sender, date, reference_id, department_id)
    res.json(mail)
})

module.exports = router