import './App.css';
import socketIOClient from 'socket.io-client';
import Login from "./components/login";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/signUp";
const socketIO = socketIOClient.connect('http://localhost:4000');

function App({handleLogin, handleRegister}) {
  return (
      <Routes>
        <Route path={"login"} element={<Login handleLogin={handleLogin} handleRegister={handleRegister}/>} />
        <Route path={"register"} element={<SignUp handleRegister={handleRegister}/>} />
      </Routes>
  );
}

export default App;
