import axios from 'axios'
import { useEffect,useState } from 'react'
import { useAlert } from 'react-alert'

export default function List(props) {
    const [list,setList]=useState(null)
    const alert = useAlert()

    useEffect(()=>{
        function getFiles(){

 
            const getToken = () => {
            
                const tokenString = localStorage.getItem('token');
                
                const userToken = JSON.parse(tokenString);
                return userToken?.token
              };
              
            const getRoomId = () => {
            
                const roomString = localStorage.getItem('room');
                 
                const room = JSON.parse(roomString);
                return room?._id
              };
          
              axios.post('/api/user/rooms/getFilesByRoom',{roomId:getRoomId()}, { headers: {"Authorization" : `Bearer ${getToken()}`}})
              .then(function (response) {

                  setList(response.data)
                 
          
               })
              .catch(function (error) {
                alert.error('נכשל לצערנו')
              });
          
          
          } 

          getFiles()
    },[])
    if (!list) return <h3>מחפש שאלונים שבוצעו</h3>
    function getTextFromKey(meta) {
        if (meta.type==='tash') {
            return `ת"ש - ${meta.subType} `
        }
        return 'שם לא הוגדר'
    }
    return (
        <div className="component1-list-rooms">
           
        <h1 className="component1-text2">שאלונים שבוצעו</h1>

        {
                list.map((key,index)=>{
                   return(
                    <div onClick={()=>props.setChosen(key)} key={index} className="component1-container1">
                   
                   <svg viewBox="0 0 1024 1024" className="component1-icon1">
                      <path d="M384 64h640v128h-640v-128zM384 448h640v128h-640v-128zM384 832h640v128h-640v-128zM0 128c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 896c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128z"></path>
                    </svg>
                    <span className="component1-text3">{getTextFromKey(key.meta)}</span>
                  </div>
                  )  
                })
            }

        
      </div>
    )   
}