import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
interface CreateProps {
  uuid: string;
  socket: any; 
  setUser:any
}

const Create: React.FC<CreateProps> = ({ uuid ,socket ,setUser}) => {
  const [roomId,setRoomId] = useState(uuid)
  const [name , setName] = useState("")
const navigate  = useNavigate()
  const handleCreateRoom = (e: { preventDefault: () => void; })=>{
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
  return (
    <>
      <form className="form col-span-12 mt-5 outline-8 outline-slate-700 p-4  rounded-lg border border-black">
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
              value={roomId}
              placeholder="Generate Room code"
              disabled
              className="form-control p-2 border border-black rounded mr-2"
            />
            <div className="flex space-x-2">
              <Button type="button" variant="primary" onClick={() => setRoomId(uuid)}>
                Generate
              </Button>
              <Button type="button" variant="destructive" onClick={()=>console.log("clicked")}>
                Copy
              </Button>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-4" onClick={handleCreateRoom}>
          Create Room
        </Button>
      </form>
    </>
  );
};

export default Create;
