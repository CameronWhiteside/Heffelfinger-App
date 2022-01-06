const { handleValidationErrors, id } = require('./index.js');
const { check } = require('express-validator');

const name = check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an event name.')
    .isLength({ min: 4 , max: 100})
    .withMessage('Please provide an event name between 4 and 100 characters.')

const description = check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please enter an event description.')
    .isLength({ max: 1000 })
    .withMessage(`Please keep that desciprition under 1000 characters.`)

const website =  check('website')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a meeting link.')
    .isURL()
    .withMessage('Please enter a valid URL')

const logo = check('logo')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a meeting link.')
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/, 'g')
    .withMessage('Please enter  url for a .jpg, .gif, .png, or .svg logo')

exports.validateCreate = [
    name,
    description,
    website,
    logo,
    handleValidationErrors
];

exports.validateUpdate = [
    id,
    name,
    description,
    website,
    logo,
    handleValidationErrors
]
