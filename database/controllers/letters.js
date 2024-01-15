const {Letters, JobTitles, Departments, Attachments, Users} = require('../db')
const {Op} = require('sequelize')
const letters = {}
moment = require('moment')

// folio: DataTypes.INTEGER,
// year: DataTypes.INTEGER,
// matter: DataTypes.STRING,
// recipient: DataTypes.STRING,
// job_title_id: DataTypes.INTEGER,
// department_id: DataTypes.INTEGER,
// user_id: DataTypes.INTEGER,
// attachment_id: DataTypes.INTEGER

async function getNextFolioByYear(year) {
    try {
      // Buscar el último decreto en el año especificado
      const lastLetter = await Letters.findOne({
        where: { year },
        order: [['folio', 'DESC']], // Ordenar por folio en orden descendente para obtener el último
        limit: 1,
      });

      // Determinar el próximo folio
      let nextFolio = 1;
      if (lastLetter) {
        nextFolio = lastLetter.folio + 1;
      }
  
      return { 'code': 1, 'data': nextFolio };
    } catch (err) {
      return { 'code': 0, 'data': err };
    }
}

async function getNextFolioByYearAndType(year, type) {
    try {
      // Buscar el último decreto en el año especificado
      const lastDecree = await Letters.findOne({
        where: { year, type },
        order: [['folio', 'DESC']], // Ordenar por folio en orden descendente para obtener el último
        limit: 1,
      });

      // Determinar el próximo folio
      let nextFolio = 1;
      if (lastDecree) {
        nextFolio = lastDecree.folio + 1;
      }
  
      return { 'code': 1, 'data': nextFolio };
    } catch (err) {
      return { 'code': 0, 'data': err };
    }
}

async function create( matter, recipient, job_title_id, type, user_id, attachment_id){
    //const newFolio = await getNextFolioByYear(parseInt(moment(new Date()).format('YYYY')))
    const newFolio = await getNextFolioByYearAndType(parseInt(moment(new Date()).format('YYYY')), type)

    const letter = await Letters.create({ 
        folio: newFolio.data,
        year: parseInt(moment(new Date()).format('YYYY')),
        matter: matter,
        recipient: recipient,
        job_title_id: job_title_id,
        type: type,
        user_id: user_id,
        attachment_id: attachment_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return letter
}

async function findAll(){
    const letter = await Letters.findAll({
        include: [
            { model: JobTitles },
            { model: Users },
            { model: Attachments }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return letter
}

async function findAllBeteenDates(start, end){
    const letter = await Letters.findAll({
        where: {
            createdAt: {
                [Op.between]: [start, end]
            }
        },
        include: [
            { model: JobTitles },
            { model: Users },
            { model: Attachments }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return letter
}

async function updateAttachment(id, attachment_id){
    const letter = await Letters.update({ attachment_id: attachment_id }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return letter
}


letters.create = create
letters.findAll = findAll
letters.findAllBeteenDates = findAllBeteenDates
letters.updateAttachment = updateAttachment

module.exports = letters
