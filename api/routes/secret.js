const  express = require("express");
const chackAuth = require("../middlewares/chackAuth");

const  {getUsers} = require("../controllers/secret/users");
const  {createRoom,getRoomsByUser,addFileToRoom,getRooms,getFilesByRoomId,updateQ} = require("../controllers/secret/room");

const router = express.Router();

router.post("/", chackAuth, (req, res) => {
  console.log("auth succsesfuly")
});

 
 

router.post("/createRoom", chackAuth, createRoom);

router.get("/getUsers", chackAuth , getUsers)

router.get("/getRoomsByUser", chackAuth ,getRoomsByUser)
router.post("/addFileToRoom" ,chackAuth,addFileToRoom)
router.get("/getRooms", chackAuth ,getRooms)

router.get("/getFilesByRoomId" ,getFilesByRoomId)
 

router.post("/updateQ", chackAuth,updateQ)

    module.exports=router

   