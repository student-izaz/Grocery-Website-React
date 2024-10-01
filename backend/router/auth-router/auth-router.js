const express = require('express');
const router = express.Router();
const authControllers = require('../../controllers/auth/auth-controller')

router.route('/create-account').post( authControllers.createUser );

module.exports = router;