import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MessageCard from './components/MessageCard';
import FloatingHearts from './components/FloatingHearts';
import FlowerBouquet from './components/FlowerBouquet';
import './App.css';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  padding: 20px;
`;

// Adding decorative elements
const DecorationCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,105,180,0.3) 0%, rgba(255,105,180,0) 70%);
  filter: blur(8px);
  z-index: 1;
`;

const StarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: white;
  border-radius: 50%;
  opacity: ${props => props.opacity};
  animation: twinkle ${props => props.duration}s ease-in-out infinite;
  
  @keyframes twinkle {
    0%, 100% { opacity: ${props => props.opacity}; transform: scale(1); }
    50% { opacity: ${props => props.opacity * 0.5}; transform: scale(0.8); }
  }
`;

const Title = styled(motion.div)`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 10px 0 20px;
  z-index: 100;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #ff69b4;
    font-family: 'Dancing Script', cursive;
    margin: 0;
    padding: 0;
    white-space: pre-line;
    line-height: 1.4;
    text-shadow: 
      0 0 10px rgba(255, 105, 180, 0.7),
      0 0 20px rgba(255, 105, 180, 0.5),
      0 0 30px rgba(255, 105, 180, 0.3);
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 
        0 0 10px rgba(255, 105, 180, 0.7),
        0 0 20px rgba(255, 105, 180, 0.5),
        0 0 30px rgba(255, 105, 180, 0.3);
    }
    to {
      text-shadow: 
        0 0 20px rgba(255, 105, 180, 0.9),
        0 0 30px rgba(255, 105, 180, 0.7),
        0 0 40px rgba(255, 105, 180, 0.5);
    }
  }
  
  @media (max-width: 768px) {
    margin: 5px 0 15px;
    
    h1 {
      font-size: clamp(1.5rem, 4vw, 2rem);
      padding: 0 15px;
    }
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

function App() {
  const stars = Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 3 + 1;
    const opacity = Math.random() * 0.5 + 0.3;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    
    return (
      <Star 
        key={i}
        size={size}
        opacity={opacity}
        duration={duration}
        style={{ top: `${top}%`, left: `${left}%` }}
      />
    );
  });

  // Decorative circles
  const circles = [
    { size: 300, x: '10%', y: '20%', delay: 0 },
    { size: 200, x: '85%', y: '15%', delay: 0.3 },
    { size: 250, x: '75%', y: '80%', delay: 0.6 },
    { size: 180, x: '15%', y: '75%', delay: 0.9 },
  ];

  return (
    <AppContainer>
      <StarContainer>
        {stars}
      </StarContainer>
      
      {circles.map((circle, index) => (
        <DecorationCircle
          key={index}
          style={{ 
            width: circle.size, 
            height: circle.size, 
            left: circle.x, 
            top: circle.y 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: circle.delay, duration: 1 }}
        />
      ))}
      
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          {"Chúc mừng ngày 8/3,\nChúc các người đẹp Phan Thiết của Tui!"}
        </motion.h1>
      </Title>
      
      <ContentContainer>
        <FlowerBouquet />
        <MessageCard />
      </ContentContainer>
      
      <FloatingHearts count={20} />
    </AppContainer>
  );
}

export default App;