const express = require('express')
const router = express.Router()
const attachments = require('../database/controllers/attachments')

router.post('/attachments/create', async (req, res) => {
    const { url } = req.body
    const attachment = await attachments.create(url)
    res.json(attachment)
})

router.get('/attachments/findOneById', async (req, res) => {
    const { id } = req.body
    const attachment = await attachments.findOneById(id)
    res.json(attachment)
})

router.post('/attachments/upload', attachments.upload.single('file'), async (req, res) => {
    const { file } = req
    res.json(file)
})

module.exports = router