


 
//**  chat app */
 
function addToRoom(io,roomId) {

  io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`); socket.on('disconnect', () =>
    console.log(`Disconnected: ${socket.id}`)); socket.on('join', (room) => {
    console.log(`Socket ${socket.id} joining ${room}`);
    socket.join(room);
    }); socket.on('chat', (data) => {
    const { message, room,user } = data;
    console.log(`msg: ${message} from ${user}, room: ${room}`);
    io.to(room).emit('chat', {message,user});
    });
    });
}
 
 
 
module.exports={
  addToRoom:addToRoom
}