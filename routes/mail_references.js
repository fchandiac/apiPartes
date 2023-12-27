const express = require('express')
const router = express.Router()
const mailReferences = require('../database/controllers/mail_references')

router.post('/mail_references/create', async (req, res) => {
    const { name } = req.body
    const mailReference = await mailReferences.create(name)
    res.json(mailReference)
})

router.get('/mail_references/findAll', async (req, res) => {
    const mailReference = await mailReferences.findAll()
    res.json(mailReference)
})

router.post('/mail_references/findOneById', async (req, res) => {
    const { id } = req.body
    const mailReference = await mailReferences.findOneById(id)
    res.json(mailReference)
})

router.post('/mail_references/update', async (req, res) => {
    const { id, name } = req.body
    const mailReference = await mailReferences.update(id, name)
    res.json(mailReference)
})

router.post('/mail_references/destroy', async (req, res) => {
    const { id } = req.body
    const mailReference = await mailReferences.destroy(id)
    res.json(mailReference)
})

module.exports = router