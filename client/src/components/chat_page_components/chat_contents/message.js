function Message({message, sender}) {
    return (
        <div className="message">
            <div className="photo"
                 style={{backgroundImage: "url(\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80\")"}}>
                <div className="online"></div>
            </div>
            <p className="text"> 9 pm at the bar if possible 😳</p>
        </div>
    );
}
export default Message;