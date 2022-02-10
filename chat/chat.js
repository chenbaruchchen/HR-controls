
const mongoose = require("mongoose");

const RoomChat = require("../api/models/RoomChat");


 
  

 
//**  chat app */
 
function addToRoom(io,roomId) {

  io.on('connection', (socket) => {
    // console.log(`Connected: ${socket.id}`); 
    socket.on('disconnect', () =>
    console.log(`Disconnected: ${socket.id}`));
     socket.on('join', (room) => {
    // console.log(`Socket ${socket.id} joining ${room}`);
    socket.join(room);
    });
    
    socket.on('chat', (data) => {
    const { message, room,user } = data;
   ///data base handleing

    

 
           ///what is the room id?
  RoomChat.findOne({ roomId: room }).then((roomChat) => {
    if (roomChat) {
     
        ///add here massege to list



       
 
        let messages=[...roomChat.messages]
        messages.push({message,user,date:Date.now()})
        // roomChat.overwrite({ messages: messages});
        // roomChat.save()


      
       RoomChat.findOneAndUpdate({roomId: room}

, {$set: {messages: messages}}

, function (err, doc) {

   

});



     } else {
      const newRoomChat = new RoomChat({

        // object with propretyfrom client - the messages is just arr with one message
        roomId:room,
        messages:[{message,user,data:Date.now()}]
      });

       
      newRoomChat
            .save()
            .then((user) => {console.log("חדר חדש נוצר עם הודעה")})
            .catch((err) => console.log(err));
       
 
    }

  })


    io.to(room).emit('chat', {message,user});
    });
    });
}
 
 
 
module.exports={
  addToRoom:addToRoom
}