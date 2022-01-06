const express = require('express');
const asyncHandler = require('express-async-handler');


const { setTokenCookie, requireAuth } = require('../../utils/auth');

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
    const allUsers = await User.findAll({ include: [{ model: Company, includes: CompanyRole }, Ticket] })
    res.json(allUsers)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundUser = await User.findByPk(id)
    return res.json(foundUser)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const deletedUser = await User.findByPk(id, {include: [{ model: Company, includes: CompanyRole }, Ticket] })
    deletedUser.destroy();
    return res.json(deletedUser)
}))

module.exports = router




  module.exports = router;
