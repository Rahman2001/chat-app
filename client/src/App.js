import './App.css';
import socketIOClient from 'socket.io-client';
import Login from "./components/login";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/signUp";

const socketIO = socketIOClient.connect('http://localhost:4000');

function App() {

  return (
      <Routes>
        <Route path={"login"} element={<Login/>} />
        <Route path={"register"} element={<SignUp/>} />
      </Routes>
  );
}


export default App;
