import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

const logos = [
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716817722/Amazon_icon.svg_a4qmtg.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800282/Apple_logo_black.svg_seeetv.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800359/WISE.L-b3d3de3c_rexehe.png"
];

const lineWidth = 80; // Width of the connecting line
const lineHeight = 2; // Height of the connecting line

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        {/* First Logo */}
        <div className="bg-[#2b2836] border-2 border-[#33313d] rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <img src={logos[0]} alt="Amazon Logo" className="filter invert brightness-0" />
        </div>

        {/* Connecting Line with Animation */}
        <div
          className="relative"
          style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#33313d', overflow: 'hidden' }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-75"
            initial={{ x: '-40px' }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: 'linear',
            }}
          />
        </div>

        {/* Second Logo */}
        <div className="relative bg-teal-500 border-2 border-[#00FFFF] rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_rgba(56,189,248,0.5)]">
          <img src={logos[1]} alt="Apple Logo" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
        </div>

        {/* Reverse Connecting Line with Animation */}
        <div
          className="relative"
          style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#33313d', overflow: 'hidden' }}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-75"
            initial={{ x: '40px' }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: 'linear',
            }}
          />
        </div>

        {/* Third Logo */}
        <div className="bg-[#2b2836] border-2 border-[#33313d] rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <img src={logos[2]} alt="Wise Logo" className="filter invert brightness-0" />
        </div>
      </div>
    </div>
  );
};

const data = [50, 40, 300, 320, 500, 350, 200, 230, 500];
const maxData = Math.max(...data);
const chartHeight = 400;
const chartWidth = 800;

// Card component with hover effect
interface CardWithEffectProps {
  children: React.ReactNode;
}

const CardWithEffect: React.FC<CardWithEffectProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#141120] flex-1 rounded-xl border border-[#33313d] p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: 'rgba(64, 224, 208, 0.3)',
            filter: 'blur(100px)',
            zIndex: 10,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default CardWithEffect;
