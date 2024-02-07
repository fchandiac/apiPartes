const { Attachments } = require('../db')
const attachments = {}
const multer = require('multer')
const path = require('path')
const fs = require('fs');
const archiver = require('archiver');

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

const downloadZip = async (archivos) => {
    // const files = archivos.filter(archivo => typeof archivo === 'string')
    console.log(archivos)
    return new Promise((resolve, reject) => {
        const zipStream = archiver('zip');

        // Ruta del archivo ZIP 
        const zipFilePath = path.join(__dirname, '../../public/attachments/archivos.zip');

        // Crear un flujo de escritura para el archivo ZIP
        const output = fs.createWriteStream(zipFilePath);

        // Manejar eventos de finalización y error
        output.on('close', () => {
            resolve(zipFilePath);
        });

        output.on('error', (error) => {
            reject(error);
        });

        // Conectar el flujo de salida del archivo ZIP al flujo de escritura
        zipStream.pipe(output);

        // Agregar cada archivo a comprimir al archivo ZIP
        archivos.forEach(archivo => {
            console.log(archivo)
            // path.join(__dirname, '../../public/attachments/${archivo}')
            const archivoPath = path.join(__dirname, '../../public/attachments/', archivo); // Ruta del archivo PDF
            //zipStream.append(fs.createReadStream(archivoPath), { name: archivo });
            if (fs.existsSync(archivoPath)) {
                zipStream.append(fs.createReadStream(archivoPath), { name: archivo });
            } else {
                console.error(`No se pudo encontrar el archivo: ${archivoPath}`);
            }
        });

        // Finalizar el archivo ZIP
        zipStream.finalize();
        console.log('zip creado')
    });
};


const getMissingFiles = async (archivos) => {
    const missingFiles = [];

    for (const archivo of archivos) {
        const archivoPath = path.join(__dirname, '../../public/attachments/', archivo);
        if (!fs.existsSync(archivoPath)) {
            missingFiles.push(archivo);
        }
    }

    return missingFiles;
};





attachments.create = create
attachments.findOneById = findOneById
attachments.upload = upload
attachments.downloadZip = downloadZip
attachments.getMissingFiles = getMissingFiles

module.exports = attachments
