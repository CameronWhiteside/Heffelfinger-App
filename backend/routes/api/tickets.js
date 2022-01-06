const express = require('express');
const asyncHandler = require('express-async-handler');

const db = require('../../db/models');
const { Ticket, User, Event } = db

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allTickets = await Ticket.findAll({include: [User, Event]})
    res.json(allTickets)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundTicket = await Ticket.findByPk(id, {include: [User, Event]})
    return res.json(foundTicket)
}))

router.post('/', asyncHandler(async (req, res) => {
    const newTicketData = req.body
    const newTicket = await Ticket.create(newTicketData)
    return res.json({newTicket})
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const oldTicketData = await Ticket.findByPk(id)
    let updatedTicket = await oldTicketData.update(req.body)
    return res.json(updatedTicket)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const deletedTicket = await Ticket.findByPk(id)
    deletedTicket.destroy();
    return res.json(deletedTicket)
}))

module.exports = router
