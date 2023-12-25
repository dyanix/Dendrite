import React from 'react';
import { useState } from 'react';
import Create from "./create";
import Join from "./join";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

interface RoomProps {
  uuid: string;
  socket: any; 
  setUser:any
}

const Room: React.FC<RoomProps> = ({ uuid ,socket ,setUser }) => {
  const [activeComponent, setActiveComponent] = useState('create');

  const handleToggle = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-2 gap-4 mt-20">
          <div
            className={`col-span-2 md:col-span-1 p-4 border rounded cursor-pointer transition-all duration-300 ${
              activeComponent === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleToggle('create')}
          >
            Create Room
          </div>
          <div
            className={`col-span-2 md:col-span-1 p-4 border rounded cursor-pointer transition-all duration-300 ${
              activeComponent === 'join' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleToggle('join')}
          >
            Join Room
          </div>
          <div className="col-span-2">
            {activeComponent === 'create' ? <Create uuid={uuid} socket={socket} setUser={setUser}/> : <Join socket={socket} setUser={setUser} uuid={uuid} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Room;
