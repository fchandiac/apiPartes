const {DecreesCategories} = require('../db')
const decreesCategories = {}

async function create(name){
    const decreesCategory = await DecreesCategories.create({ name: name }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decreesCategory
}

async function findAll(){
    const decreesCategory = await DecreesCategories.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decreesCategory
}

async function findOneById(id){
    const decreesCategory = await DecreesCategories.findOne(
        { 
            where: { id: id },
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decreesCategory
}

async function update(id, name){
    const decreesCategory = await DecreesCategories.update({ 
        name: name,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decreesCategory
}

async function destroy(id){
    const decreesCategory = await DecreesCategories.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return decreesCategory
}

decreesCategories.create = create
decreesCategories.findAll = findAll
decreesCategories.findOneById = findOneById
decreesCategories.update = update
decreesCategories.destroy = destroy

module.exports = decreesCategories

