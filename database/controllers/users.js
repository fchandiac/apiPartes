const { Users, Profiles } = require('../db')
const users = {}

// user_name: DataTypes.STRING,
// name: DataTypes.STRING,
// pass: DataTypes.STRING,
// profile_id: DataTypes.INTEGER,



async function create(user_name, name, pass, profile_id, ){
    const user = await Users.create({ 
        user_name: user_name,
        name: name,
        pass: pass,
        profile_id: profile_id,
     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}


async function findAll(){
    const user = await Users.findAll(
        { 
            include: [
                { model: Profiles },
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
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findOneByUserName(user_name){
    const user = await Users.findOne(
        { 
            where: { user_name: user_name },
            include: [
                { model: Profiles },
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function update(id, user_name, name, profile_id, ){
    const user = await Users.update({ 
        user_name: user_name,
        name: name,
        profile_id: profile_id,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function updatePass(id, pass){
    const user = await Users.update({ 
        pass: pass,
     }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findAllRecipients(){
    const user = await Users.findAll(
        { 
            where: { profile_id: 1004 },
            include: [
                { model: Profiles },
            ],
        }
        ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}


users.create = create
users.findAll = findAll
users.findOneById = findOneById
users.update = update
users.updatePass = updatePass
users.findOneByUserName = findOneByUserName
users.findAllRecipients = findAllRecipients




module.exports = users