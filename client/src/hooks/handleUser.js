
export  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString;
    return userToken?.token
  };
  
 export const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
     
  };

  export  const getUser = () => {
    const userString = localStorage.getItem('user');
    const userData = JSON.parse(userString);
    return userData
  };

 

 

export function handleUser(user) {
   
  ////check if user token not pass and save it in local
  if (user!==null) {

    var now = new Date();
    if(user.expired<=now){
      saveToken(user.token)
    }
  } 

   


  ////token 
 


 
}


 