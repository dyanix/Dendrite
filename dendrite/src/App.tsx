import {  Route, Routes } from 'react-router-dom';
import Public from "./componentsauth/public";
import Protected from "./componentsauth/protected";
import Room from "../components/room";
import useAuth from './hooks/useAuth';
import BoardPage from '../components/boardPage';
function App() {
  const isLogin = useAuth();
  

  return (
   
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/room/:roomid" element={<BoardPage />} />
        <Route
          path="/"
          element={isLogin ? <Protected /> : <Public/>}
        />
      </Routes>
    
  );
}

export default App;
