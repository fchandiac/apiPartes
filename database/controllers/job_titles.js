const {JobTitles} = require('../db')
const jobTitles = {}

async function create(name){
    const jobTitle = await JobTitles.create({ name: name }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return jobTitle
}

async function findAll(){
    const jobTitle = await JobTitles.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return jobTitle
}

async function findOneById(id){
    const jobTitle = await JobTitles.findOne(
        { 
            where: { id: id },
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return jobTitle
}

async function update(id, name){
    const jobTitle = await JobTitles.update({ 
        name: name,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return jobTitle
}

async function destroy(id){
    const jobTitle = await JobTitles.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return jobTitle
}

jobTitles.create = create
jobTitles.findAll = findAll
jobTitles.findOneById = findOneById
jobTitles.update = update
jobTitles.destroy = destroy

module.exports = jobTitles