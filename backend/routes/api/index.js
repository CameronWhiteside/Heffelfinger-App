const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const companyRouter = require('./companies.js')
const externalLinksRouter = require('./externallinks')
const employeeRouter = require('./employees.js')
const companyRolesRouter = require('./companyroles.js')
const eventsRouter = require('./events.js')
const siteRolesRouter = require('./siteroles.js')
const tagsRouter = require('./tags.js')
const ticketsRouter = require('./tickets.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/companies', companyRouter);
router.use('/externallinks', externalLinksRouter);
router.use('/employees', employeeRouter);
router.use('/companyroles', companyRolesRouter);
router.use('/events', eventsRouter);
router.use('/siteroles', siteRolesRouter);
router.use('/tags', tagsRouter);
router.use('/tickets', ticketsRouter);


const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

module.exports = router;
