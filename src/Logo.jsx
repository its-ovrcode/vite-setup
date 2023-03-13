import { motion } from 'framer-motion';
import { useState } from 'react';

import logo from './assets/yourise.svg';
function Logo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleDragStart = (event, info) => {
    setIsDragging(true);
    setPosition(info.point);
    setInitialMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleResizeStart = (event) => {
    setIsResizing(true);
    setInitialMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  const handleDrag = (event, info) => {
    if (isDragging) {
      setPosition(info.point);
    }
  };

  const handleResize = (event) => {
    if (isResizing) {
      const dx = event.clientX - initialMousePosition.x;
      const dy = event.clientY - initialMousePosition.y;
      const newWidth = Math.max(100, window.innerWidth / 2 + dx);
      const newHeight = Math.max(100, window.innerHeight / 2 + dy);
      setPosition({ x: position.x, y: position.y + dy });
      setInitialMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div
      className='relative w-screen h-screen'
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      onMouseLeave={handleDragEnd}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDrag}
      onTouchCancel={handleDragEnd}>
      <motion.img
        className='bg-red-500 absolute rounded-lg'
        drag
        dragMomentum={false}
        dragConstraints={{
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: window.innerHeight,
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onResizeStart={handleResizeStart}
        onResizeEnd={handleResizeEnd}
        onResize={handleResize}
        style={{
          x: position.x,
          y: position.y,
          width: '50vw',
          height: '50vh',
          minWidth: 100,
          minHeight: 100,
          resize: 'both',
          overflow: 'hidden',
        }}
        src={logo}
      />
    </div>
  );
}

export default Logo;
