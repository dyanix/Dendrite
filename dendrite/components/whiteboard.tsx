// import { useEffect } from 'react';
// import { fabric } from 'fabric';

// const Whiteboard = () => {
//   useEffect(() => {
//     // Initialize Fabric.js canvas
//     const canvas = new fabric.Canvas('whiteboard', {
//       isDrawingMode: true,
//       selection: false,
//     });

//     // Event listener for color change
//     document.getElementById('colorPicker')?.addEventListener('input', (e) => {
//       changeColor(e.target.value);
//     });

//     // Event listener for brush size change
//     document.getElementById('brushSize')?.addEventListener('input', (e) => {
//       changeBrushSize(parseInt(e.target.value, 10));
//     });

//     // Function to change brush color
//     const changeColor = (color:string) => {
//       canvas.freeDrawingBrush.color = color;
//     };

//     // Function to change brush size
//     const changeBrushSize = (size:number) => {
//       canvas.freeDrawingBrush.width = size;
//     };

//     // Clear the canvas
//     const clearCanvas = () => {
//       canvas.clear();
//     };

//     // Attach event listener to the clear button
//     document.getElementById('clearButton')?.addEventListener('click', clearCanvas);
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div>
//       <input type="color" id="colorPicker" value="#000000" />
//       <input type="range" id="brushSize" min="1" max="50" defaultValue="5" />
//       <button id="clearButton">Clear</button>
//       <canvas id="whiteboard" width="800" height="600"></canvas>
//     </div>
//   );
// };

// export default Whiteboard;

// import React, { useEffect, useRef } from 'react';
// import { fabric } from 'fabric';

// interface WhiteboardProps {
//   tool?: string;
//   brushSize?: number | undefined;
//   color?: string | undefined;
// }

// const Whiteboard: React.FC<WhiteboardProps> = ({ tool, brushSize, color }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }

//     const canvas = new fabric.Canvas(canvasRef.current);

//     // Set canvas size
//     canvas.setWidth(800);
//     canvas.setHeight(600);

//     // Set initial background color
//     canvas.setBackgroundColor('#fff', canvas.renderAll.bind(canvas));

//     // Add event listeners or drawing logic based on the selected tool, brushSize, and color
//     // For simplicity, let's just draw a rectangle when the canvas is clicked
//     canvas.on('mouse:down', (event) => {
//       const pointer = event.pointer;
//       if (pointer && tool === 'brush' && brushSize && color) {
//         const { x, y } = pointer;
//         const brush = new fabric.Rect({
//           left: x - brushSize / 2,
//           top: y - brushSize / 2,
//           width: brushSize,
//           height: brushSize,
//           fill: color,
//         });
//         canvas.add(brush);
//       }
//       // Add more conditions for other tools if needed
//     });

//     // Cleanup: remove Fabric.js canvas on component unmount
//     return () => {
//       canvas.dispose();
//     };
//   }, [tool, brushSize, color]);

//   return <canvas ref={canvasRef} className="gray"></canvas>;
// };

// export default Whiteboard;

// import React, { useEffect, useRef } from 'react';
// import { fabric } from 'fabric';

// interface WhiteboardProps {
//   brushSize?: number | undefined;
//   color?: string | undefined;
// }

// const Whiteboard: React.FC<WhiteboardProps> = ({ brushSize, color }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }

//     const canvas = new fabric.Canvas(canvasRef.current, {
//       isDrawingMode: true,
//       selection: false,
//     });
//     // Set canvas size
//     canvas.setWidth(800);
//     canvas.setHeight(600);
//     // Set initial brush size and color
//     canvas.freeDrawingBrush.width = brushSize || 5;
//     canvas.freeDrawingBrush.color = color || 'black';

//     // Cleanup: remove Fabric.js canvas on component unmount
//     return () => {
//       canvas.dispose();
//     };
//   }, [brushSize, color]);

//   return <canvas ref={canvasRef} className=""></canvas>;
// };

// export default Whiteboard;

import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

interface WhiteboardProps {
  brushSize?: number | undefined;
  color?: string | undefined;
}

const Whiteboard: React.FC<WhiteboardProps> = ({ brushSize, color }) => {
  const canvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      // Initialize the canvas
      const canvas = new fabric.Canvas('whiteboard', {
        isDrawingMode: true,
        selection: false,
      });
      canvas.setWidth(800);
      canvas.setHeight(600);
      canvas.setBackgroundColor('#fff', canvas.renderAll.bind(canvas));

      // Save the canvas reference
      canvasRef.current = canvas;
    }

    // Update brush size and color
    if (brushSize !== undefined) {
      canvasRef.current.freeDrawingBrush.width = brushSize;
    }
    if (color !== undefined) {
      canvasRef.current.freeDrawingBrush.color = color;
    }
  }, [brushSize, color]);

  return (
    <canvas id="whiteboard" width="800" height="600" className='' style={{ border: '2px solid #000' }}></canvas>

  );
};

export default Whiteboard;
