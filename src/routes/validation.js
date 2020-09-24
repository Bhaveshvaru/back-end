const { check, validationResult } = require('express-validator');
module.exports.validateSignupRequest = [
    check('name').notEmpty().withMessage('name is required'),
    check('email').notEmpty().withMessage('Valid Email is required'),
 
  ];