const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const userValidator = require('../validator/userValidator')
const validate = require('../validator/validate')

// router.use(verifyJWT)

router.route('/')
    .get(usersController.getAllUsers)
    .post(userValidator(),validate,usersController.createNewUser)
    // .patch(usersController.updateUser)
    // .delete(usersController.deleteUser)

module.exports = router