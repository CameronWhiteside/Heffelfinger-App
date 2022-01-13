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
    .isLength({ max: 1500 })
    .withMessage(`Company description must be fewer than 1000 characters.`)

const headline = check('headline')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a company headline.')
    .isLength({ max: 150 })
    .withMessage(`Company headline must be fewer than 100 characters.`)

const website =  check('website')
    .optional().isURL()
    .withMessage('Please enter a valid URL')

const imageUrl = check('imageUrl')
    .optional().matches(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\.(?:jpg|gif|png|svg)/, 'g')
    .withMessage('URL must end in .jpg, .gif, .png, or .svg imageUrl')

const facebookUrl = check('facebookUrl')
    .optional().matches(/((https?:\/\/)(.+?\.)?facebook\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/, 'g')
    .withMessage('Facebook URL must include text "facebook.com"')

const instagramUrl = check('instagramUrl')
    .optional().matches(/((https?:\/\/)(.+?\.)?instagram\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/, 'g')
    .withMessage('Facebook URL must include text "instagram.com"')

const twitterUrl = check('twitterUrl')
    .optional().matches(/((https?:\/\/)(.+?\.)?twitter\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/, 'g')
    .withMessage('Facebook URL must include text "twitter.com"')

const linkedInUrl = check('linkedInUrl')
    .optional().matches(/((https?:\/\/)(.+?\.)?linkedIn\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/, 'g')
    .withMessage('Facebook URL must include text "linkedIn.com"')

exports.validateCreate = [
    name,
    headline,
    description,
    website,
    imageUrl,
    facebookUrl,
    instagramUrl,
    twitterUrl,
    linkedInUrl,
    handleValidationErrors
];

exports.validateUpdate = [
    id,
    name,
    headline,
    description,
    website,
    imageUrl,
    facebookUrl,
    instagramUrl,
    twitterUrl,
    linkedInUrl,
    handleValidationErrors
]
