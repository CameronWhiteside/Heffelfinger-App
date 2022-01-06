const express = require('express');
const asyncHandler = require('express-async-handler');


const { setTokenCookie, requireAuth } = require('../../utils/auth');

//Import DB Models
const { User } = require('../../db/models');

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




  module.exports = router;
