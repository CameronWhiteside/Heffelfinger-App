const { handleValidationErrors, id } = require('./index.js');
const { check } = require('express-validator');

const name =  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an event name.')
    .isLength({ min: 4 , max: 100})
    .withMessage('Please provide an event name between 4 and 100 characters.')

const startDateTime =  check('startDateTime')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a start date and time')
    .isAfter()
    .withMessage('Event must begin at a future date/time.')

const description = check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please enter an event description.')
    .isLength({ max: 1000 })
    .withMessage(`Keep that description under 1000 characters. Maybe save some of that content for the event, hm?`)

 const meetingLink = check('meetingLink')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a meeting link.')
    .isURL()
    .withMessage('Please enter a valid URL')


exports.validateCreate = [
    name,
    startDateTime,
    description,
    meetingLink,
    handleValidationErrors
];

exports.validateUpdate = [
    id,
    name,
    startDateTime,
    description,
    meetingLink,
    handleValidationErrors
]
