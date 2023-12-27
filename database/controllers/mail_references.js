const {MailReferences} = require('../db')
const mailReferences = {}

async function create(name){
    const mailReference = await MailReferences.create({ name: name }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mailReference
}

async function findAll(){
    const mailReference = await MailReferences.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mailReference
}

async function findOneById(id){
    const mailReference = await MailReferences.findOne(
        { 
            where: { id: id },
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mailReference
}

async function update(id, name){
    const mailReference = await MailReferences.update({ 
        name: name,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mailReference
}

async function destroy(id){
    const mailReference = await MailReferences.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return mailReference
}



mailReferences.create = create
mailReferences.findAll = findAll
mailReferences.findOneById = findOneById
mailReferences.update = update
mailReferences.destroy = destroy

module.exports = mailReferences
