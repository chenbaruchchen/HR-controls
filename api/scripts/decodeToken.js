const jwt_decode=require("jwt-decode");

function decode(token){
 var decoded = jwt_decode(token);
 return decoded 

}
module.exports={
    decode
}