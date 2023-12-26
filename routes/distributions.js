const express = require('express')
const router = express.Router()
const distributions = require('../database/controllers/distributions')


router.post('/distributions/create', async (req, res) => {
    const { reference_type, reference_id, recipient_id, user_update_id} = req.body
    const distribution = await distributions.create(reference_type, reference_id, recipient_id, user_update_id)
    res.json(distribution)
})

router.post('/distributions/findAllByReference', async (req, res) => {
    const { reference_type, reference_id } = req.body
    const distribution = await distributions.findAllByReference(reference_type, reference_id)
    res.json(distribution)
})

router.post('/distributions/findAllByRecipient', async (req, res) => {
    const { recipient_id } = req.body
    const distribution = await distributions.findAllByRecipient(recipient_id)
    res.json(distribution)
})

router.post('/distributions/findOneById', async (req, res) => {
    const { id } = req.body
    const distribution = await distributions.findOneById(id)
    res.json(distribution)
})


router.post('/distributions/updateStatus', async (req, res) => {
    const { id, status, user_update_id } = req.body
    const distribution = await distributions.updateStatus(id, status, user_update_id)
    res.json(distribution)
})

module.exports = router