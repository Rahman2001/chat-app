import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import Chat_menu from "./chat_page_components/chat_menu";
import Chat_discussion from "./chat_page_components/chat_discussions/chat_discussion";
import Chat_content from "./chat_page_components/chat_contents/chat_content";

function Home() {
    const navigate = useNavigate();
    const value = useContext(UserContext);
    console.log(value);
    useEffect(() => {
        if(!value || Object.keys(value).length === 0) {
            navigate('/login');
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <Chat_menu/>
                <Chat_discussion/>
                <Chat_content/>
            </div>
        </div>
    )

}
export default Home;