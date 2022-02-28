const  express = require("express");
const chackAuth = require("../middlewares/chackAuth");

const  {getUsers} = require("../controllers/secret/users");
const  {createRoom,getRoomsByUser,addFileToRoom,getRooms,getFilesByRoomId,updateQ,getLastTenMessages} = require("../controllers/secret/room");

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


// router.get("/getLastTenMessages", chackAuth, getLastTenMessages)
 
router.post("/getLastTenMessages", chackAuth, getLastTenMessages);


 
    module.exports=router

   