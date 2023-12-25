import { useState } from 'react';
import Whiteboard from '../whiteboard';
import logo from '/logo.svg';
// import { Button } from '../ui/button';

const BoardPage = () => {
  const [brushSize, setBrushSize] = useState(5);
  const [color, setColor] = useState('black');

  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-gray-800 p-2 text-white mb-4 rounded-md fixed top-0 left-1/2 transform -translate-x-1/2 mt-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold mr-7">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-6 w-6 mr-2" />
                <b>Dendrite</b>
              </div>
            </div>
            <div className="flex space-x-4">
              {/* <div className="flex items-center">
                <input
                  type="radio"
                  id="brush"
                  name="tool"
                  checked={true} // Only brush tool is selected
                  value="brush"
                  onChange={() => {}}
                  className="mr-1"
                  readOnly // Make it read-only to avoid React warnings
                />
                <label htmlFor="brush" className="ml-2">
                  Brush
                </label>
              </div> */}
              <div className="flex items-center">
              <label htmlFor="brush" className="ml-5 mr-5">
                  Brush
                </label>
                <input
                  type="range"
                  id="brushSize"
                  name="brushSize"
                  min="1"
                  max="50"
                  value={brushSize}
                  onChange={(e) => setBrushSize(parseInt(e.target.value, 10))}
                  className="mr-2 bg-gray-700 text-white p-1 rounded"
                />
                {/* <label htmlFor="brushSize" className="ml-2">
                  Brush 
                </label> */}
              </div>
              <div className="flex items-center">
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{
                    marginRight: '0.5rem',
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    border: '1px solid white',
                    boxShadow: '0 0 0 4px white',
                  }}
                />
                <label htmlFor="color" className="ml-2">
                  Color
                </label>
              </div>
              {/* <div className="flex items-center gap-4">
                <Button>Undo</Button>
                <Button>Redo</Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="destructive">Clear</Button>
              </div> */}
            </div>
          </div>
        </div>

        <div className=" mt-32 ">
          <Whiteboard brushSize={brushSize} color={color} />
        </div>
      </div>
    </>
  );
};

export default BoardPage;
