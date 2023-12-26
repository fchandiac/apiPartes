const {Recipients, Users, Departments} = require('../db')
const recipients = {}

async function create(name, repository, url_repository, department_id, user_id){
    const recipient = await Recipients.create({ name: name, repository: repository, url_repository: url_repository, department_id: department_id, user_id: user_id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return recipient
}

async function findAll(){
    const recipient = await Recipients.findAll({
        include: [
            { model: Users},
            { model: Departments },
        ],
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return recipient
}

async function findOneById(id){
    const recipient = await Recipients.findOne(
        { 
            where: { id: id },
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return recipient
}

async function update(id, name, repository, url_repository, department_id, user_id){
    const recipient = await Recipients.update({ 
        name: name,
        repository: repository,
        url_repository: url_repository,
        department_id: department_id,
        user_id: user_id,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return recipient
}

async function destroy(id){
    const recipient = await Recipients.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return recipient
}

async function findAllByUser(user_id){
    const recipient = await Recipients.findAll({
        where: { user_id: user_id },
        include: [
            { model: Users},
            { model: Departments },
        ],
        order: [
            ['createdAt', 'DESC'],
        ],
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return recipient
}

recipients.create = create
recipients.findAll = findAll
recipients.findOneById = findOneById
recipients.update = update
recipients.destroy = destroy
recipients.findAllByUser = findAllByUser
recipients.update = update

module.exports = recipients