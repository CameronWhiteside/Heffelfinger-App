const express = require('express');
const asyncHandler = require('express-async-handler');

const eventValidations = require('../../utils/validations/events')
const db = require('../../db/models');
const { Event, Company, Ticket, Tag, User } = db

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allEvents = await Event.findAll({ include: [Company, {model: Ticket, include: User}, Tag]})
    res.json(allEvents)
}))

router.get('/:eventId(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.eventId
    const foundEvent= await Event.findByPk(id, {include: [Company, {model: Ticket, include: User}, Tag]})
    return res.json(foundEvent)
}))

router.post('/', eventValidations.validateCreate, asyncHandler(async (req, res) => {
    const newEventData = req.body
    const newEvent = await Event.create(newEventData)
    return res.json({newEvent})
}))

router.put('/:eventId(\\d+)', eventValidations.validateUpdate, asyncHandler(async (req, res) => {
    const id = req.params.eventId
    const oldEventData = await Event.findByPk(id)
    let updatedEvent = await oldEventData.update(req.body)
    return res.json(updatedEvent)
}))

router.delete('/:eventId(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.eventId
    const deletedEvent= await Event.findByPk(id)
    deletedEvent.destroy();
    return res.json(deletedEvent)
}))


// router.get('/:eventId(\\d+)/tags',

// )


// router.post('/:eventId(\\d+)/tags/:tagId(\\d+)',

// )


// router.delete('/:eventId(\\d+)/tags/:tagId(\\d+)',

// )



module.exports = router;
