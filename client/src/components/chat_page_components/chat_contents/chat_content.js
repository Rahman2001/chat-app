import MessageGenerator from "./message_generator";
import {useContext, useState} from "react";
import {UserContext} from "../../../App";
import Message from "./message";

function ChatContent() {
    const [inputState, setInputState] = useState('');
    const [message, setMessage] = useState([]);
    const [lastTime, setLastTime] = useState("");
    const userDetails = useContext(UserContext);
    const handleChange = (e) => {
        e.preventDefault();
        const text = e.target.value;
        setInputState(text);
    }
    const handleClick = (e) => {
        e.preventDefault();
        let date = new Date();
        let currentTime = date.getHours() + ":" + date.getMinutes();
        if(lastTime === currentTime) {
            currentTime = "";
        }
        console.log(currentTime);
        setLastTime(currentTime);
        setMessage([...message, inputState]);
        setInputState('');
    }
    return (
        <section className="chat">
            <div className="header-chat">
                <i className="icon fa fa-user-o" aria-hidden="true"></i>
                <p className="name">Megan Leib</p>
                <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
            </div>
            <div className="messages-chat">
                <div className="chat-contents">
                    <div className="message">
                        <div className="photo"
                             style={{backgroundImage: "url(\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80\")"}}>
                            <div className="online"></div>
                        </div>
                        <p className="text"> Hi, how are you ? </p>
                    </div>
                    {message.map((mes) => (
                        <Message message={mes} sender={userDetails} time={lastTime}/>
                    ))}
                </div>
            </div>
            <div className="footer-chat">
                <i className="icon fa fa-smile-o clickable" style={{fontSize:'25pt', ariaHidden:true}}></i>
                <input type="text" className="write-message" placeholder="Type your message here" value={inputState} onChange={handleChange}/>
                <button type={"submit"} className={"icon send fa fa-paper-plane-o clickable"} aria-hidden={true} onClick={handleClick}/>
            </div>
        </section>
    );
}
export default ChatContent;