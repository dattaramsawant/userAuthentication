const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')

const user = require('./userRoutes')
const auth = require('./authRoutes')

router.use('/user',user)
router.use('/auth',auth)

module.exports = router;