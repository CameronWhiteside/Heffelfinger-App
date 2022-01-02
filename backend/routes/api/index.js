const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

module.exports = router;
