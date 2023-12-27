const express = require('express')
const router = express.Router()
const jobTitles = require('../database/controllers/job_titles')

router.post('/job_titles/create', async (req, res) => {
    const { name } = req.body
    const jobTitle = await jobTitles.create(name)
    res.json(jobTitle)
})

router.get('/job_titles/findAll', async (req, res) => {
    const jobTitle = await jobTitles.findAll()
    res.json(jobTitle)
})

router.post('/job_titles/findOneById', async (req, res) => {
    const { id } = req.body
    const jobTitle = await jobTitles.findOneById(id)
    res.json(jobTitle)
})

router.post('/job_titles/update', async (req, res) => {
    const { id, name } = req.body
    const jobTitle = await jobTitles.update(id, name)
    res.json(jobTitle)
})

router.post('/job_titles/destroy', async (req, res) => {
    const { id } = req.body
    const jobTitle = await jobTitles.destroy(id)
    res.json(jobTitle)
})

module.exports = router
