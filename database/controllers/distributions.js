const { Distributions, Recipients, Users, Departments } = require('../db')
const distributions = {}

async function create(reference_type, reference_id, recipient_id, user_update_id) {
    const distribution = await Distributions.create({
        reference_type: reference_type,
        reference_id: reference_id,
        recipient_id: recipient_id,
        user_update_id: user_update_id,
        status: 1,
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return distribution
}

async function findAllByReference(reference_type, reference_id) {
    const distribution = await Distributions.findAll(
        {
            where: {
                reference_type: reference_type,
                reference_id: reference_id
            },
            include: [
                { model: Recipients, include: [{ model: Users }, { model: Departments }] },
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return distribution
}

async function findAllByRecipient(recipient_id) {
    const distribution = await Distributions.findAll(
        {
            where: {
                recipient_id: recipient_id
            },
            include: [
                { model: Recipients, include: [{ model: Users }, { model: Departments }] },
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return distribution
}

async function findOneById(id) {
    const distribution = await Distributions.findOne(
        {
            where: { id: id },
            include: [
                { model: Recipients, include: [{ model: Users }, { model: Departments }] },
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return distribution
}

function updateStatus(id, status, user_update_id) {
    const distribution = Distributions.update({
        status: status,
        user_update_id: user_update_id,
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return distribution
}

function findAll () {
    const distribution = Distributions.findAll({
        include: [
            { model: Recipients, include: [{ model: Users }, { model: Departments }] },
            { model: Users, as: 'user_update'}
        ],
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return distribution
}

distributions.create = create
distributions.findAllByReference = findAllByReference
distributions.findAllByRecipient = findAllByRecipient
distributions.findOneById = findOneById
distributions.updateStatus = updateStatus
distributions.findAll = findAll

module.exports = distributions

