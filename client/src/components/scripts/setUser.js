//  function getEmail (){
//     const email = localStorage.getItem('token');
//     JSON.parse(email);
//     return email?.email
//  }
 const getEmail = () => {
    const email = localStorage.getItem('token');
    const userEmail = JSON.parse(email);
    return userEmail?.email
  };
export {getEmail}


