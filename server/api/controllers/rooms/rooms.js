const mongoose = require("mongoose");

const Room = require("../../models/Room");
const File = require("../../models/File");
const RoomChat = require("../../models/RoomChat");
const {decode} = require('../../scripts/decodeToken')


module.exports = {
  
    addRoom: (req, res) => {
        

      const newRoom = new Room({
         
        name:req.body.name

      });
     
    let room=''
    newRoom
      .save()
      .then((room) =>{
          room=room
        console.log("נוסף בהצלחה")
        res.send(room)

      })
      .catch((err) =>{ console.log(err)
        res.send(err)}
      );
     
  
      

  
     
  
    }
    ,getRooms:(req,res)=>{

        Room.find( {}, function (err, rooms) {
            if (err) throw err;
            if (! rooms) return res.send(401);
             res.send(rooms )
            });
         
    }
  
 
 
}






