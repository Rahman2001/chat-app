import './App.css';
import socketIOClient from 'socket.io-client';
import Login from "./components/login";
const socketIO = socketIOClient.connect('http://localhost:4000');

function App() {
  return (
      <Login/>
  );
}

export default App;
