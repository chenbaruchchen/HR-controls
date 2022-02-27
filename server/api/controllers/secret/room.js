const mongoose = require("mongoose");

const Room = require("../../models/Room");
const File = require("../../models/File");
const RoomChat = require("../../models/RoomChat");
const {decode} = require('../../scripts/decodeToken')


module.exports = {
  getLastTenMessages: (req, res) => {
    console.log('start')  
    RoomChat.find( {roomId:req.body.roomId}, function (err, roomChat) {
       
      if (err) {
        console.log(err)
      };
      if (! roomChat) return res.send([]);
   
   res.send(roomChat)
  });

  },
    createRoom: (req, res) => {
         // console.log(req.headers.authorization.split(' ')[1],decoded)
         console.log(req.headers)

      const newRoom = new Room({
        array:req.body.chosen,
        name:req.body.text

      });
    //   newRoom.name = hash;
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
     
  
      

  
     
  
    },
    getRoomsByUser:(req, res) => {
        function filterRooms(rooms){
            data=  decode(req.headers.authorization.split(' ')[1]) 
             let filterRooms=[]
            for (let index = 0; index < rooms.length; index++) {
                const room = rooms[index];
                
              let isIn
              room.array.forEach(user => {
                  if (user.email===data.email) {
                    isIn= true
                  }  
        
                });
         if(isIn){
                    filterRooms.push(room)
                }
                
               
        
        
            }
            return filterRooms
        } 

Room.find( {}, function (err, rooms) {
    if (err) throw err;
    if (! rooms) return res.send(401);
 let filterRoomsData=   filterRooms(rooms);
 res.send(filterRoomsData)
});

   }, 
   addFileToRoom:(req, res) => {
     console.log("req.body")
    

            const newFile = new File({
        ans:req.body.ans,
         roomId:req.body.roomId,
         meta:req.body.meta,


      });
      console.log(newFile)
    //   newRoom.name = hash;
    let file=''
    newFile
      .save()
      .then((file) =>{
          file=file
        console.log("נוסף בהצלחה")
        res.send(file)

      })
      .catch((err) =>{ 
        console.log(err)
        res.send(err)}
      );
      
   }, getRooms:(req, res) => {
   console.log(req.headers.authorization)

Room.find( {}, function (err, rooms) {
if (err) throw err;
if (! rooms) return res.send(401);
 
res.send(rooms)
});

},  getFilesByRoomId:(req, res) => {
   
   File.find( {roomId:req.query.roomId}, function (err, files) {
  if (err) throw err;
  if (! files) return res.send(401);
   
  res.send(files)
  });
  
  }, updateQ:(req,res)=>{

    let find={_id:req.body.fileId}

     File.find(find, function (err, files) {
      if (err) throw err;
      if (! files) return res.send(401);
       
      
      fileFound(files)
      });


function fileFound(files) {
  let newData= files[0]
  newData.ans[req.body.indexQ]={
    details:req.body.editDetails,
    found:req.body.editFound

  } 
  
  sendNewData(newData)
 }

function sendNewData(newData) {
 
  File.findOneAndUpdate(find,newData,  {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}
    //  let newData=req.body
    //   File.findOneAndUpdate(find,  {upsert: true}, function(err, doc) {
    //     if (err) return res.send(500, {error: err});
    //     return res.send('Succesfully saved.');
    // });
  }

}






