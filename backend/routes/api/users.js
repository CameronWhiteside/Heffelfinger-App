const express = require('express');
const asyncHandler = require('express-async-handler');


const { setTokenCookie } = require('../../utils/auth');

//Import DB Models
const { User, Ticket, Company, CompanyRole } = require('../../db/models');

//Import Validation Middleware
const { validateSignup } = require('../../utils/validations/users')


const router = express.Router();


router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

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
  const foundUser = await User.findByPk(id, { include: [{ model: Company, include: CompanyRole }, { model: Ticket, include: {model: Event, include: Company}}]})
    return res.json(foundUser)
}))

router.delete('/:userId(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.userId
    const deletedUser = await User.findByPk(id, { include: [{ model: Company, include: CompanyRole }, { model: Ticket, include: {model: Event, include: Company}}]})
    deletedUser.destroy();
    return res.json(deletedUser)
}))

module.exports = router
