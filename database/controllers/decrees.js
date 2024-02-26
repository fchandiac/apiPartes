const moment = require('moment')
const { Decrees, Attachments, DecreesCategories, Departments, Users, Recipients, Classifications } = require('../db')
const decrees = {}
const { Op } = require("sequelize")




async function create(type, matter, date, attachment_id, category_id, department_id, user_id, third, sensitive, classification_id) {
    const newFolio = await getNextFolioByYearAndType(parseInt(moment(new Date()).format('YYYY')), type)
    const decree = await Decrees.create({
        folio: newFolio.data,
        year: parseInt(moment(new Date()).format('YYYY')),
        type: type,
        matter: matter,
        date: date,
        attachment_id: attachment_id,
        decrees_category_id: category_id,
        department_id: department_id,
        user_id: user_id,
        third: third,
        sensitive: sensitive,
        classification_id: classification_id,
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decree
}

async function findAll() {
    const decree = await Decrees.findAll(
        {
            include: [
                { model: Attachments },
                { model: DecreesCategories },
                { model: Departments },
                { model: Users },
                { model: Classifications }
            ],
            sort: [
                ['folio', 'DESC']
            ]
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decree
}

async function findAllByYear(year) {
    const decree = await Decrees.findAll(
        {
            where: { year: year },
            include: [
                { model: Attachments },
                { model: DecreesCategories },
                { model: Departments },
                { model: Users },
                { model: Classifications }
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decree
}

async function findAllBeteenDatesAndType(start, end, type) {
    const decree = await Decrees.findAll(
        {
            where: {
                date: {
                    [Op.between]: [start, end]
                },
                type: type
            },
            include: [
                { model: Attachments },
                { model: DecreesCategories },
                { model: Departments },
                { model: Users },
                { model: Classifications }
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decree
}
async function findAllBeteenDatesTypeAndClassification(start, end, type, classification_id) {
    const decree = await Decrees.findAll(
        {
            where: {
                date: {
                    [Op.between]: [start, end]
                },
                type: type,
                classification_id: classification_id
            },
            include: [
                { model: Attachments },
                { model: DecreesCategories },
                { model: Departments },
                { model: Users },
                { model: Classifications }
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decree
}

async function findAllBeteenDates(start, end) {
    const decree = await Decrees.findAll(
        {
            where: {
                date: {
                    [Op.between]: [start, end]
                }
            },
            include: [
                { model: Attachments },
                { model: DecreesCategories },
                { model: Departments },
                { model: Users },
                { model: Classifications }
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decree
}

async function getNextFolioByYear(year) {
    try {
        // Buscar el último decreto en el año especificado
        const lastDecree = await Decrees.findOne({
            where: { year },
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

async function getNextFolioByYearAndType(year, type) {
    try {
        // Buscar el último decreto en el año especificado
        const lastDecree = await Decrees.findOne({
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

async function updateAttachment(id, attachment_id) {
    const decree = await Decrees.update(
        { attachment_id: attachment_id },
        { where: { id: id } }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return decree
}

async function findOneById(id) {
    const decree = Decrees.findOne(
        {
            where: { id: id },
            include: [
                { model: Attachments },
                { model: DecreesCategories },
                { model: Departments },
                { model: Users },
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return decree
}

async function update(id, type, matter, date, category_id, department_id, third, sensitive, classification_id) {
    const decree = await Decrees.update(
        {
            type: type,
            matter: matter,
            date: date,
            decrees_category_id: category_id,
            department_id: department_id,
            third: third,
            sensitive: sensitive,
            classification_id: classification_id
        },
        { where: { id: id } }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return decree
}

async function findOneById(id) {
    const decree = await Decrees.findOne(
        {
            where: { id: id },
            include: [
                { model: Attachments },
                { model: DecreesCategories },
                { model: Departments },
                { model: Users },
                { model: Classifications }
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return decree
}


decrees.create = create
decrees.findAll = findAll
decrees.findAllByYear = findAllByYear
decrees.findAllBeteenDatesAndType = findAllBeteenDatesAndType
decrees.findAllBeteenDates = findAllBeteenDates
decrees.updateAttachment = updateAttachment
decrees.findOneById = findOneById
decrees.update = update
decrees.findOneById = findOneById
decrees.findAllBeteenDatesTypeAndClassification = findAllBeteenDatesTypeAndClassification

module.exports = decrees

