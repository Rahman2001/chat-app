import {useState} from "react";

function MessageGenerator({Message}) {
    const [lastTime, setlastTime] = useState(); // saves the time of last message
    return (
        <Message/>
    );

}
export default MessageGenerator;