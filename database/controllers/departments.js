const { Departments } = require('../db')
const departments = {}



async function create(name) {
    const department_ = await Departments.create({
        name: name
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return department_
}

async function findAll() {
    const department_ = await Departments.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return department_
}


async function findOneById(id) {
    const department_ = await Departments.findOne(
        {
            where: { id: id },
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return department_
}

async function update(id, name) {
    const department_ = await Departments.update({
        name: name,
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return department_
}

async function destroy(id) {
    const department_ = await Departments.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return department_
}

departments.create = create
departments.findAll = findAll
departments.findOneById = findOneById
departments.update = update
departments.destroy = destroy

module.exports = departments