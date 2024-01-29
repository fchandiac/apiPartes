const {Classifications} = require('../db')
const { Op } = require("sequelize");
const classifications = {}



async function create(name) {
    const classification = await Classifications.create({ name: name }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return classification
}

async function findAll() {
    const classification = await Classifications.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return classification
}

async function findOneById(id) {
    const classification = await Classifications.findOne(
        {
            where: { id: id },
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return classification
}

async function update(id, name) {
    const classification = await Classifications.update({
        name: name,
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return classification
}

async function destroy(id) {
    const classification = await Classifications.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return classification
}

classifications.create = create
classifications.findAll = findAll
classifications.findOneById = findOneById
classifications.update = update
classifications.destroy = destroy

module.exports = classifications