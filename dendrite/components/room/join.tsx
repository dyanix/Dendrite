
import { Button } from "../ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface JoinProps {
  uuid:string;
  socket: any; 
  setUser:any
 
}
const Join :  React.FC<JoinProps>= ({uuid , socket ,setUser}) =>{
  const [roomId,setRoomId] = useState("")
   const [name , setName] = useState("")
   const navigate  = useNavigate()

   const handleJoinRoom = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
   
    const roomData = {
      name,
      roomId,
      userId:uuid,
      host:true,
      presenter:true
      
    }
    setUser(roomData)
    navigate(`/room/${roomId}`)
     console.log(roomData);
    socket.emit("userJoined" ,roomData)
    
   }

    return(
        <>
<form className="form col-span-12 mt-5 outline-8 outline-slate-700 p-4 rounded-lg border border-black">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control my-2 p-2 border border-black rounded"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Room code"
            value={roomId}
            onChange={(e)=>setRoomId(e.target.value)}

              className="form-control p-2 border border-black rounded mr-2"
            />
           
          </div>
        </div>
        <Button type="submit" onClick={handleJoinRoom} className="mt-4">
         Join Room
        </Button>
      </form>
        </>
    )
}

export default Join