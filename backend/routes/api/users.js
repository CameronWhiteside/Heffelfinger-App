const express = require('express');
const asyncHandler = require('express-async-handler');


const { setTokenCookie } = require('../../utils/auth');

//Import DB Models
const { User, Ticket, Company, CompanyRole, ExternalLinks, Event } = require('../../db/models');

//Import Validation Middleware
const { validateSignup } = require('../../utils/validations/users')


const router = express.Router();


router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, firstName, lastName } = req.body;
      const user = await User.signup({ email, firstName, lastName, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);


router.get('/', asyncHandler(async (req, res) => {
  const allUsers = await User.findAll({ include: [{ model: Company, include: CompanyRole }, { model: Ticket, include: {model: Event, include: Company}}]})
    res.json(allUsers)
}))

router.get('/:userId(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.userId
  const foundUser = await User.findByPk(id, { include: [{ model: Company, include: CompanyRole }, { model: Ticket, include: {model: Event, include: Company}}, ExternalLinks]})
    return res.json(foundUser)
}))


router.put('/:userId(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.userId
  const {location, biography} = req.body
  const udpatedUser = await User.update({
    location,
    biography
  }, { where: { id }})
    return res.json(udpatedUser)
}))

router.delete('/:userId(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.userId
    const deletedUser = await User.findByPk(id, { include: [{ model: Company, include: CompanyRole }, { model: Ticket, include: {model: Event, include: Company}}]})
    deletedUser.destroy();
    return res.json(deletedUser)
}))

module.exports = router
