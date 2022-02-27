const  express = require("express");



const  {login, register,logout,refreshToken} = require("../controllers/users");

const router = express.Router();


router.post('/login', login)


router.post('/register', register)


router.post('/logOut', logout)
router.post('/refreshToken', refreshToken)


    module.exports=router
        