const { handleValidationErrors } = require('./index.js');
const { check } = require('express-validator');


exports.validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('firstName')
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage('Please provide a first name with at least 4 characters.'),
    check('firstName')
      .not()
      .isEmail()
      .withMessage('First name cannot be an email.'),
    check('lastName')
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage('Please provide a last ame with at least 4 characters.'),
    check('lastName')
      .not()
      .isEmail()
      .withMessage('Last name cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a password.')
        .isLength({ min: 8 })
        .withMessage('Password must be 8 characters or more.')
        .isLength({ max: 40 })
        .withMessage(`Try and keep that password under 40 characters. I promise we're encrypting this in our database.`)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&.*")'),
    handleValidationErrors,
];


exports.loginValidators = [
    check('login')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an email address.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage(`I'll give you a hint. Your password isn't a blank password field.`)
  ];
