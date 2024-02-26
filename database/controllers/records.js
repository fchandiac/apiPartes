const {Records, Users} = require('../db')
const records = {}

async function create(year, folio, document_type, action, user_id){
    const record = await Records.create({ 
        year: year,
        folio: folio,
        document_type: document_type,
        action: action,
        user_id: user_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

async function findAll(){
    const record = await Records.findAll({
        include: [
            { model: Users }
        ],
        order: [['created_at', 'ASC']]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

records.create = create
records.findAll = findAll

module.exports = records