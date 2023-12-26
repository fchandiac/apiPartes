const express = require('express')
const router = express.Router()
const recipients = require('../database/controllers/recipients')


router.post('/recipients/create', async (req, res) => {
    const { name, repository, url_repository, department_id, user_id } = req.body
    const recipient = await recipients.create(name, repository, url_repository, department_id, user_id)
    res.json(recipient)
})

router.get('/recipients/findAll', async (req, res) => {
    const recipient = await recipients.findAll()
    res.json(recipient)
})

router.post('/recipients/findOneById', async (req, res) => {
    const { id } = req.body
    const recipient = await recipients.findOneById(id)
    res.json(recipient)
})

router.post('/recipients/update', async (req, res) => {
    const { id, name, repository, url_repository, department_id, user_id } = req.body
    const recipient = await recipients.update(id, name, repository, url_repository, department_id, user_id)
    res.json(recipient)
})

router.post('/recipients/destroy', async (req, res) => {
    const { id } = req.body
    const recipient = await recipients.destroy(id)
    res.json(recipient)
})


router.post('/recipients/findAllByUser', async (req, res) => {
    const { user_id } = req.body
    const recipient = await recipients.findAllByUser(user_id)
    res.json(recipient)
})

module.exports = router

