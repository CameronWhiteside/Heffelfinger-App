const express = require('express');
const asyncHandler = require('express-async-handler');

const companyValidations = require('../../utils/validations/companies')
const db = require('../../db/models');

const { ExternalLink } = db

const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundLink = await ExternalLink.findByPk(id)
    return res.json(foundLink)
}))


router.get('/', asyncHandler(async (req, res) => {
    const allLinks = await ExternalLink.findAll()
    return res.json(allLinks)
}))


router.post('/', asyncHandler(async (req, res) => {
    const newLinkData = req.body
    const newLinks = await ExternalLink.create(newLinkData)
    console.log(newLinks)
    return res.json({newLinks})
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id

    const oldLinkData = await ExternalLink.findByPk(id)
    let updatedLink = await oldLinkData.update(req.body)
    return res.json(updatedLink)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const deletedLink = await ExternalLink.findByPk(id)
    deletedLink.destroy();
    return res.json(deletedLink)
}))

router.delete('/companies/:id(\\d+)', asyncHandler(async (req, res) => {
    console.log(`ATTEMPTING DESTRUCTION`)
    await ExternalLink.destroy({
        where: {
            companyId: id
        }
    })
    return res.json(ExternalLink)
}))

router.delete('/users/:userId(\\d+)', asyncHandler(async (req, res) => {
    await ExternalLink.destroy({
        where: {
            userId
        }
    })
}))

router.delete('/events/:eventId(\\d+)', asyncHandler(async (req, res) => {
    await ExternalLink.destroy({
        where: {
            eventId
        }
    })
}))


module.exports = router
