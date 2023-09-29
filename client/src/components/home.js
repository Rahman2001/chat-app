import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import ChatMenu from "./chat_page_components/chat_menu";
import ChatDiscussion from "./chat_page_components/chat_discussions/chat_discussion";
import ChatContent from "./chat_page_components/chat_contents/chat_content";
import main from '../css/main.css';

function Home() {
    const navigate = useNavigate();
    const value = useContext(UserContext);
    console.log(value);
    useEffect(() => {
        if(!value || Object.keys(value).length === 0) {
            navigate('/login');
        }else {
            let body = document.body;
            body.id = 'chat-app-page-body';
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <ChatMenu/>
                <ChatDiscussion/>
                <ChatContent/>
            </div>
        </div>
    );

}
export default Home;