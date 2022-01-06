const { handleValidationErrors, id } = require('./index.js');
const { check } = require('express-validator');


const name = check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a tag name')
    .isLength({ min: 2, max: 30 })
    .withMessage('Please provide a tag name between 2 and 30 characters.')
    .matches(/^[a-zA-Z\s]*$/, 'g')
    .withMessage('Role name may only contain letters and spaces')

exports.validateCreate = [
    name,
    handleValidationErrors
];

exports.validateUpdate = [
    id,
    name,
    handleValidationErrors
]
