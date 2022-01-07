const { handleValidationErrors, id } = require('./index.js');
const { check } = require('express-validator');

const name = check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a company name.')
    .isLength({ max: 100})
    .withMessage('Company name must be fewer than 100 characters.')

const description = check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a company description.')
    .isLength({ max: 1000 })
    .withMessage(`Company description must be fewer than 1000 characters.`)

const location = check('location')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a company location.')

const tagline = check('tagline')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a company tagline.')
    .isLength({ max: 100 })
    .withMessage(`Company tagline must be fewer than 100 characters.`)

const website =  check('website')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a company website.')
    .isURL()
    .withMessage('Please enter a valid URL')

const logo = check('logo')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a company logo.')
    .matches(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\.(?:jpg|gif|png|svg)/, 'g')
    .withMessage('Please enter  url for a .jpg, .gif, .png, or .svg logo')

exports.validateCreate = [
    name,
    tagline,
    location,
    description,
    website,
    logo,
    handleValidationErrors
];

exports.validateUpdate = [
    id,
    name,
    tagline,
    location,
    description,
    website,
    logo,
    handleValidationErrors
]
