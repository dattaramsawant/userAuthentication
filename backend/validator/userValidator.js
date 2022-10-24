const { body } = require('express-validator');
const { user } = require('../models');

const userValidator=()=>{
    return[
        body('username')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Name is Required.')
            .custom(value=>{
                return user.findOne({
                    where:{
                        username:value
                    }
                })
                .then(user=>{
                    if(user){
                        return Promise.reject('Username already exists.')
                    }
                })
            }),
        
        body('password')
            .trim()
            .not()
            .isEmpty()
            .withMessage("Password is required.")
            
    ]
}

module.exports=userValidator