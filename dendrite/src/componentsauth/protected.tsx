
import Navbar from "../../components/navbar";
import { Button } from "../../components/ui/button";
import { Medal } from "lucide-react";
import Footer from "../../components/footer";
import { cn } from "../../lib/utils"
import { useNavigate } from 'react-router-dom';

const Protected = () => {
  const navigate = useNavigate();

  const handleRoomButtonClick = () => {
    // Navigate to the /room route when the button is clicked
    navigate('/room');
  };

  return (
    <>
      <div className="h-full bg-slate-100">
        <Navbar />
        <div className="pt-60 pb-60 bg-slate-100 mt-[-140px]">
          <div className="flex items-center justify-center  flex-col">
            <div className={cn("flex items-center justify-center  flex-col")}>
              <div className="mb-4  flex  items-center border  shadow-sm p-4  bg-amber-100 text-amber-600 rounded-full uppercase">
                <Medal className="h-6 w-6 mr-2" />
                No. 1 WhiteBoard
              </div>
              <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                Dendrite makes team to move
              </h1>
              <div className="text-3xl md:text-6xl bg-gradient-to-r  from-fuchsia-600 to-pink-600  text-white px-4 p-2 rounded-md pb-4 w-fit">
                work forward
              </div>
            </div>
            <div className={cn("text-sm md:text-xl text-neutral-400 mt-6 max-w-xs md:max-w-2xl text-center mx-auto")}>
              Collaborate and reach new productivity peaks.
            </div>
            <Button className="mt-20" size="lg" onClick={handleRoomButtonClick}>
             You are ready to Enter in Room
            </Button>
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Protected;


