// import {useEffect, useState} from "react";
// import Message from "./message";
//
// function MessageGenerator({message, sender}) {
//     // const userDetails = useContext(UserContext);
//     const [lastTime, setLastTime] = useState(""); // saves the time of last message
//
//     useEffect(() => {
//         let date = new Date();
//         let currentTime = date.getHours() + ":" + date.getMinutes();
//         if(lastTime === currentTime) {
//             currentTime = "";
//         }
//         console.log(currentTime);
//         setLastTime(currentTime);
//     }, [message])
//
//     return (
//         <Message message={message} sender={sender} time={lastTime}/>
//     );
// }
// export default MessageGenerator;