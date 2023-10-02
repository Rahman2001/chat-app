import MessageGenerator from "./message_generator";
import Message from "./message";

function ChatContent() {
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
                    <div className="message text-only">
                        <p className="text"> What are you doing tonight ? Want to go take a drink ?</p>
                    </div>
                    <p className="time"> 14h58</p>
                    <div className="message text-only">
                        <div className="response">
                            <p className="text"> Hey Megan ! It's been a while 😃</p>
                        </div>
                    </div>
                    <div className="message text-only">
                        <div className="response">
                            <p className="text"> When can we meet ?</p>
                        </div>
                    </div>
                    <MessageGenerator/>
                </div>
            </div>
            <div className="footer-chat">
                <i className="icon fa fa-smile-o clickable" style={{fontSize:'25pt', ariaHidden:true}}></i>
                <input type="text" className="write-message" placeholder="Type your message here"/>
                <i className="icon send fa fa-paper-plane-o clickable" aria-hidden="true"></i>
            </div>
        </section>
    );
}
export default ChatContent;