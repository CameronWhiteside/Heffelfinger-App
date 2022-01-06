const { handleValidationErrors } = require('../../utils/validation');

export const validateTags = [
    check('name')
      .exists({ checkFalsy: true })
     .isLength({ min: 2, max: 30 })
     .withMessage('Please provide a tag name between 2 and 30 characters.'),
    handleValidationErrors,
];
