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

router.post('/attachments/downloadZip', async (req, res) => {
    const { archivos } = req.body
    // const zip = await attachments.downloadZip(archivos)
    // console.log('zip', zip)
    // res.download(zip)
    try {
        const zipFilePath = await attachments.downloadZip(archivos);
        res.sendFile(zipFilePath);
    } catch (error) {
        console.error('Error al generar el archivo ZIP:', error);
        res.status(500).send('Error interno del servidor al generar el archivo ZIP');
    }
})





router.post('/attachments/getMissingFiles', async (req, res) => {
    const { archivos } = req.body
    const missingFiles = await attachments.getMissingFiles(archivos)
    res.json(missingFiles)
})


module.exports = router