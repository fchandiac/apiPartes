const { Profiles } = require('../db')
const profiles = {}



async function create(name){
    const profile = await Profiles.create({ name: name }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function findAll(){
    const profile = await Profiles.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}





profiles.create = create
profiles.findAll = findAll



module.exports = profiles



