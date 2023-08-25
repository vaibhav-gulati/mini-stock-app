
import React, { useRef, useEffect } from 'react';

function CanvasChart({ timestamps, data, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

   
    ctx.clearRect(0, 0, width, height);


    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.stroke();

    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    for (let i = 0; i < timestamps.length; i++) {
      const x = (i / (timestamps.length - 1)) * width;
      const y = ((data[i] - Math.min(...data)) / (Math.max(...data) - Math.min(...data))) * height;
      ctx.lineTo(x, height - y);
    }
    ctx.stroke();
  }, [timestamps, data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default CanvasChart;
