const { Users, Profiles, Cities, Countries, Categories, States } = require('../db')
const users = {}


async function create(mail, pass, profile_id, city_id, category_id, dni, phone, state){
    const user = await Users.create({ mail: mail, pass: pass, profile_id: profile_id, city_id: city_id, category_id: category_id, dni: dni, phone: phone, state: state }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}


async function findAll(){
    const user = await Users.findAll(
        { 
            include: [
                { model: Profiles, attributes: ['id', 'name'] },
                { model: Cities, attributes: ['id', 'name'], include: [{ model: States, attributes: ['id', 'name'], include: [{ model: Countries, attributes: ['id', 'name'] }] }] },
                { model: Categories, attributes: ['id', 'name'] }
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findOneByMail(mail){
    const user = await Users.findOne(
        { 
            where: { mail: mail },
            include: [
                { model: Profiles, attributes: ['id', 'name'] },
                { model: Cities, attributes: ['id', 'name'], include: [{ model: States, attributes: ['id', 'name'], include: [{ model: Countries, attributes: ['id', 'name'] }] }] },
                { model: Categories, attributes: ['id', 'name'] }
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findOneById(id){
    const user = await Users.findOne(
        { 
            where: { id: id },
            include: [
                { model: Profiles, attributes: ['id', 'name'] },
                { model: Cities, attributes: ['id', 'name'], include: [{ model: States, attributes: ['id', 'name'], include: [{ model: Countries, attributes: ['id', 'name'] }] }] },
                { model: Categories, attributes: ['id', 'name'] }
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findAllUsersByProfileCategoryAndCity(profile_id, category_id, city_id){
    const user = await Users.findAll(
        { 
            where: { profile_id: profile_id, category_id: category_id, city_id: city_id },
            include: [
                { model: Profiles, attributes: ['id', 'name'] },
                { model: Cities, attributes: ['id', 'name'], include: [{ model: States, attributes: ['id', 'name'], include: [{ model: Countries, attributes: ['id', 'name'] }] }] },
                { model: Categories, attributes: ['id', 'name'] }
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function updateProfile(id, profile_id){
    const user = await Users.update({ profile_id: profile_id }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } }) 
    return user
}


users.create = create
users.findAll = findAll
users.findOneByMail = findOneByMail
users.findOneById = findOneById
users.findAllUsersByProfileCategoryAndCity = findAllUsersByProfileCategoryAndCity
users.updateProfile = updateProfile


module.exports = users