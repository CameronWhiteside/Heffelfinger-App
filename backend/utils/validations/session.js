
const { handleValidationErrors } = require('./utils');
const { check } = require('express-validator');

export const validateLogin = [
    check('credential')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a valid email or username.'),
    check('password')
    .exists({ checkFalsy: true })
    .withMessage(`I'll give you a hint. Your password isn't a blank password field.`),
    handleValidationErrors,
];
