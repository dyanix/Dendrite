

import { Button } from "../ui/button";

const Join = () =>{
    return(
        <>
<form className="form col-span-12 mt-5 outline-8 outline-slate-700 p-4 rounded-lg border border-black">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control my-2 p-2 border border-black rounded"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Room code"
            
              className="form-control p-2 border border-black rounded mr-2"
            />
           
          </div>
        </div>
        <Button type="submit" className="mt-4">
         Join Room
        </Button>
      </form>
        </>
    )
}

export default Join