const { handleValidationErrors, id } = require('./index.js');
const { check } = require('express-validator');

const name = check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a role name')
    .isLength({ min: 3, max: 40 })
    .withMessage('Please provide a role name between 4 and 40 characters.')
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
