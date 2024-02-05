const {Routes} = require('../db')
const routes = {}

async function create(name, url){
    const route = await Routes.create({ name: name, url: url }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return route
}

async function findAll(){
    const route = await Routes.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return route
}

async function findOneById(id){
    const route = await Routes.findOne(
        { 
            where: { id: id },
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return route
}

async function update(id, name, url){
    const route = await Routes.update({ 
        name: name,
        url: url,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return route
}

async function destroy(id){
    const route = await Routes.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return route
}

routes.create = create
routes.findAll = findAll
routes.findOneById = findOneById
routes.update = update
routes.destroy = destroy


module.exports = routes