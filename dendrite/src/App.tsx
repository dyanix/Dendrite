import { Route, Routes } from 'react-router-dom';
import Public from "./componentsauth/public";
import Protected from "./componentsauth/protected";
import Room from "../components/room";
import useAuth from './hooks/useAuth';
import BoardPage from '../components/boardPage';
import io from "socket.io-client";
import { useState } from 'react';
import { useEffect } from 'react';

const server = "http://localhost:3000";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: Infinity, // Set reconnectionAttempts to a number or Infinity
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);

function App() {

  const [user,setUser] = useState(null)
  const uuid = () => {
    var S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };
  useEffect(() => {
    socket.on("userJoined" , (data)=>{
      if(data.success){
        console.log("userJoined");
        
      }
      else{
        console.log("Error userJoined");
        
      }
    })
   
  }, []);
  const isLogin = useAuth();

  return (
    <Routes>
      <Route path="/room" element={<Room uuid={uuid()} socket={socket} setUser={setUser} />} />
      <Route path="/room/:roomid" element={<BoardPage />} />
      <Route
        path="/"
        element={isLogin ? <Protected /> : <Public />}
      />
    </Routes>
  );
}

export default App;
