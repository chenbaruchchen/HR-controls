const  express = require("express");
const chackAuth = require("../middlewares/chackAuth");

const  {addRoom,getRooms} = require("../controllers/rooms/rooms");
const  {addFile,getFilesByRoom} = require("../controllers/files/files");

const router = express.Router();

router.post("/addRoom", chackAuth, addRoom);

  
router.post("/getRooms", chackAuth,getRooms);

router.post("/addFile", chackAuth,addFile);

router.post("/getFilesByRoom", chackAuth,getFilesByRoom);


  module.exports=router