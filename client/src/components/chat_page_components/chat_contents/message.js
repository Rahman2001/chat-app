import {useContext} from "react";
import {UserContext} from "../../../App";

function Message({message, sender, time, messageId}) {
    const userDetails = useContext(UserContext);
    if(message !== '') {
        return userDetails.email === sender.email ?(
            <div className="first-party-message" id={messageId}>
                <div className="message text-only">
                    <div className="response">
                        <p className="text">{message}</p>
                    </div>
                </div>
                {time !== "" && <p className="time">{time}</p>}
            </div>
        ) : (
            <div className="second-party-message">
                <div className="message">
                    <div className="photo"
                         style={{backgroundImage: "url(\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80\")"}}>
                        <div className="online"></div>
                    </div>
                    <p className="text">{message}</p>
                </div>
                {time !== "" && <p className="time">{time}</p>}
            </div>
        );
    }
}
export default Message;