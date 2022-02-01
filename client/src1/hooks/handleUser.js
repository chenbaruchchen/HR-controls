
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  
  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
     
  };


  function refresh() {

    function refreshToken() {
        console.log('refreshToken')
    }
    var delay = 55 * 60 * 1000; // 1 hour in msec
     delay=100
    this.timer = setInterval(
      () => refreshToken(),
            delay,
    );
  }
export function handleUser(user) {
    ///try get token
    let token=getToken()
    if(!token){
        saveToken(user.token)
        token=getToken()
    }
    refresh()
    console.log('token')
}


 