const { handleValidationErrors } = require('./index.js');
const { check } = require('express-validator');

export const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a password.')
        .isLength({ min: 8 })
        .withMessage('Password must be 8 characters or more.')
        .isLength({ max: 30 })
        .withMessage(`Try and keep that password under 30 characters. I promise we're encrypting this in our database.`)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&.*")'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please confirm your password.')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Provided passwords do not match.');
            }
            return true;
        }),
    handleValidationErrors,
];


export const loginValidators = [
    check('login')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an email address.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage(`I'll give you a hint. Your password isn't a blank password field.`)
  ];
