const express= require("express")
const router = express.Router();

const { getForm, createForm } = require('../controllers/form');
const { validateSignupRequest } = require('./validation');

router.post('/createform', validateSignupRequest, createForm);
router.get('/form', getForm);

module.exports = router;
