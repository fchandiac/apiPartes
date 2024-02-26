const express = require('express')
const router = express.Router()
const Records = require('../database/controllers/records')



router.post('/records/create', async (req, res) => {
    const { year, folio, document_type, action, user_id } = req.body
    const record = await Records.create(year, folio, document_type, action, user_id)
    res.json(record)
})

router.get('/records/findAll', async (req, res) => {
    const record = await Records.findAll()
    res.json(record)
})

module.exports = router