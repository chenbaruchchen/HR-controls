const mongoose = require("mongoose");

 const File = require("../../models/File");
 


module.exports = {
  
    addFile: (req, res) => {
        // console.log(req.body)

      const newFile = new File(req.body);
     
    let file=''
    newFile
      .save()
      .then((file) =>{
        file=file
        console.log("נוסף בהצלחה")
        res.send(file)

      })
      .catch((err) =>{ console.log(err)
        res.send(err)}
      );
     
  
      

  
     
  
    },getFilesByRoom:(req,res)=>{


      File.find( {roomId:req.body.roomId}, function (err, files) {
        if (err) throw err;
        if (! files) return res.send(401);
        console.log(files)
         res.send(files )
        });
          }
     
  
 
 
}






