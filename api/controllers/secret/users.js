const mongoose = require("mongoose");

const User = require("../../models/User");


module.exports = {
    getUsers: (req, res) => {
      console.log("try");
      console.log(req.body);
   
      let users=[]
      User.find({}, function(err, users) {
          console.log(users)
          console.log('err', err);
          res.send(users);
         })
     
  
    }
}