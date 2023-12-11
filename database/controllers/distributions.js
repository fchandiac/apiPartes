const {Distributions, Recipients} = require('../db')
const distributions = {}

async function create(reference_type, reference_id, recipient_id, user_update_id, state) {
    const distribution = await Distributions.create({
        reference_type: reference_type,
        reference_id: reference_id,
        recipient_id: recipient_id,
        user_update_id: user_update_id,
        state: state
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return distribution
}

async function findAllByReference  (reference_type, reference_id) {    
    const distribution = await Distributions.findAll(
        {
            where: {
                reference_type: reference_type,
                reference_id: reference_id
            },
            include: [
                { model: Recipients },
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })    
    return distribution
}

async function findAllByRecipient  (recipient_id) {    
    const distribution = await Distributions.findAll(
        {
            where: {
                recipient_id: recipient_id
            },
            include: [
                { model: Recipients },
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
                { model: Recipients },
            ],
        }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })    
    return distribution
}

distributions.create = create
distributions.findAllByReference = findAllByReference
distributions.findAllByRecipient = findAllByRecipient
distributions.findOneById = findOneById

module.exports = distributions

