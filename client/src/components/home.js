import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";
import styles from '../styles.module.css';
import {useContext, useEffect} from "react";

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
        <div className={styles.chatContainer}>

        </div>
    )

}
export default Home;