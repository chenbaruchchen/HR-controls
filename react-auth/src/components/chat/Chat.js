import React, { useEffect, useState } from 'react';
import './chat.css'
import { initiateSocket, disconnectSocket,
subscribeToChat, sendMessage } from './Socket';

function App(props) {
const rooms = ['A', 'B', 'C'];
const [room, setRoom] = useState(props.roomId);
const [message, setMessage] = useState('');
const [chat, setChat] = useState([]); 
useEffect(() => {
if (room) initiateSocket(room); 
subscribeToChat((err, data) => {
if(err) return; 
setChat(oldChats =>[data, ...oldChats])
}); 
return () => {
disconnectSocket();
}
}, [room]);

return (
<div>
    {props.roomId}
<h1>Room: {room}</h1>
 
<h1>Live Chat:</h1>
<input type="text" name="name" value={message}
onChange={e => setMessage(e.target.value)} />
<button onClick={()=> sendMessage(room,message)}>Send</button>




{ chat.map((m,i) => <p key={i}>{m}</p>) }
</div>
);
}export default App