import './App.css';
import socketIOClient from 'socket.io-client';
import Login from "./components/login";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/signUp";
import {memo} from "react";
import React from 'react';
import Home from "./components/home";
import {CookiesProvider, useCookies} from 'react-cookie';

const socketIO = socketIOClient.connect('http://localhost:4000');
export const UserContext = React.createContext(undefined);


const App = memo(function App() {
        // const [userDetails, setUserDetails] = useState({});
        const [cookies, setCookies] = useCookies(['user']);

        // useEffect(() => {
        //     if(Object.keys(cookies.user).length > 0) {
        //         setUserDetails(cookies.user);
        //     }
        // },[]);

        return (
            <CookiesProvider>
                <UserContext.Provider value={cookies.user}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"login"} element={<Login handleCookies={setCookies}/>}/>
                        <Route path={"register"} element={<SignUp handleCookies={setCookies}/>}/>
                    </Routes>
                </UserContext.Provider>
            </CookiesProvider>
        );
    }
);


export default App;
