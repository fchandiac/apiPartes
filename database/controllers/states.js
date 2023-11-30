const {States, Countries} = require('../db')
const states = {}

async function create(name, country_id){
    const state = await States.create({ name: name, country_id: country_id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return state
}

async function findAll(){
    const state = await States.findAll({
        include: [{ model: Countries, attributes: ['id', 'name'] }]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return state
}

states.create = create
states.findAll = findAll

module.exports = states
