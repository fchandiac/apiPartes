const {Mails, MailReferences, Users, Attachments, Departments} = require('../db')
const mails = {}
const moment = require('moment')

const { Op } = require("sequelize")

// folio: DataTypes.INTEGER,
// matter: DataTypes.STRING,
// external: DataTypes.BOOLEAN,
// sender: DataTypes.STRING,
// date: DataTypes.DATE,
// reference_id: DataTypes.INTEGER,
// user_id: DataTypes.INTEGER,
// attachment_id: DataTypes.INTEGER


async function getNextFolioByYear(year) {
    try {
      // Buscar el último decreto en el año especificado
      const lastMail = await Mails.findOne({
        where: { year },
        order: [['folio', 'DESC']], // Ordenar por folio en orden descendente para obtener el último
        limit: 1,
      });

      // Determinar el próximo folio
      let nextFolio = 1;
      if (lastMail) {
        nextFolio = lastMail.folio + 1;
      }
  
      return { 'code': 1, 'data': nextFolio };
    } catch (err) {
      return { 'code': 0, 'data': err };
    }
}

async function create(matter, external, sender, date, reference_id, user_id, attachment_id, department_id){
    const newFolio = await getNextFolioByYear(parseInt(moment(new Date()).format('YYYY')))
    const mail = await Mails.create({ 
        folio: newFolio.data,
        year: parseInt(moment(new Date()).format('YYYY')),
        matter: matter,
        external: external,
        sender: sender,
        date: date,
        mail_reference_id: reference_id,
        user_id: user_id,
        attachment_id: attachment_id,
        department_id: department_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mail
}

async function findAll(){
    const mail = await Mails.findAll({
        include: [
            { model: MailReferences },
            { model: Users },
            { model: Attachments },
            { model: Departments}
        ],
        order: [
            ['createdAt', 'DESC'],
        ],
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return mail
}

async function findOneById(id){
    const mail = await Mails.findOne(
        { 
            where: { id: id },
            include: [
                { model: MailReferences },
                { model: Users },
                { model: Attachments },
                { model: Departments}
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return mail
}


async function findAllBeteenDates(start, end){
    const mail = await Mails.findAll(
        { 
            where: { 
                date: {
                    [Op.between]: [start, end]
                },
            },
            include: [
                { model: MailReferences },
                { model: Users },
                { model: Attachments },
                { model: Departments}
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return mail
}

async function updateAttachment(id, attachment_id){
    const mail = await Mails.update({ 
        attachment_id: attachment_id,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return mail
}

mails.create = create
mails.findAll = findAll
mails.findOneById = findOneById
mails.findAllBeteenDates = findAllBeteenDates
mails.updateAttachment = updateAttachment

module.exports = mails
