import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const glow = keyframes`
  0% { 
    filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.4)) 
            drop-shadow(0 0 40px rgba(255, 0, 0, 0.2));
  }
  50% { 
    filter: drop-shadow(0 0 30px rgba(255, 0, 0, 0.6))
            drop-shadow(0 0 60px rgba(255, 0, 0, 0.3));
  }
  100% { 
    filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.4))
            drop-shadow(0 0 40px rgba(255, 0, 0, 0.2));
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  padding: 20px;
`;

const BouquetContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 8s ease-in-out infinite;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 102%;
    height: 102%;
    background: radial-gradient(
      circle at center,
      rgba(139, 0, 0, 0.4) 0%,
      rgba(139, 0, 0, 0.3) 40%,
      rgba(139, 0, 0, 0.2) 60%,
      transparent 85%
    );
    filter: blur(8px);
    z-index: -1;
    animation: ${glow} 4s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 250px;
  }
`;

const BouquetImage = styled(motion.img)`
  width: 100%;
  max-width: 380px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(139, 0, 0, 0.6));
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    max-width: 260px;
    margin: 10px 0;
  }
`;

const AmbientLight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160%;
  height: 160%;
  background: radial-gradient(
    circle at center,
    rgba(139, 0, 0, 0.25) 0%,
    rgba(139, 0, 0, 0.15) 30%,
    rgba(139, 0, 0, 0.1) 50%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
  animation: ${glow} 4s ease-in-out infinite alternate;
  filter: blur(15px);
`;

const FlowerBouquet = () => {
  return (
    <Container>
      <BouquetContainer>
        <BouquetImage
          src={process.env.PUBLIC_URL + "/red-rose-removebg-preview.png"}
          alt="Red Rose Bouquet"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <AmbientLight />
      </BouquetContainer>
    </Container>
  );
};

export default FlowerBouquet; 