const { Attachments } = require('../db')
const attachments = {}
const multer = require('multer')
const path = require('path')

async function create(url) {
    const attachment = await Attachments.create({ url: url }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return attachment
}

async function findOneById(id) {
    const attachment = await Attachments.findOne(
        {
            where: { id: id },
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return attachment
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/attachments'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + formatName(file.originalname));
    }

})

const upload = multer({ storage: storage })


const formatName = (originalname) => {
    const fileExtension = originalname.split('.').pop();
    const filteredName = originalname.replace(/^.*[\\\/]/, '').replace(/[\W_]+/g, '');
    return `${filteredName}.${fileExtension}`

}


attachments.create = create
attachments.findOneById = findOneById
attachments.upload = upload

module.exports = attachments
