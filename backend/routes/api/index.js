const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const companyRouter = require('./companies.js')

router.use('/session', sessionRouter);
router.use('/companies', companyRouter);
router.use('/users', usersRouter);


const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

module.exports = router;
