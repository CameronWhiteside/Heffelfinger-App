const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { validateLogin } = require('../../utils/validations/session')

const { User } = require('../../db/models');


const router = express.Router();



router.post(
    '/',
    validateLogin,
    asyncHandler(async (req, res, next) => {
      const { email, password } = req.body;
      console.log('we made it to the sesion api')
      const user = await User.login({ email, password });

      if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
      }

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
  );

// Log out
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
);


router.get(
    '/',
    restoreUser,
    (req, res) => {
      const { user } = req;
      if (user) {
        return res.json({
          user: user.toSafeObject()
        });
      } else return res.json({});
    }
  );



module.exports = router;
