import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  width: 100%;
  overflow-x: hidden;

  h2 {
    font-size: 1.5rem;
    color: #222;
    margin-bottom: 15px;
    margin-top: 40px;
  }
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%);
  padding: 60px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 0;
`;


export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  border-radius: 16px;
  margin-bottom: 32px;
  height: 200px;
  cursor: pointer;
`;

export const BannerSlide = styled.div<{bg: string}>`
  position: absolute;
  inset: 0;
  background: ${({bg}) =>bg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  animation: ${slideIn} 0.5s ease;
  overflow: hidden;
`;

export const BannerTag = styled.span`
  background: rgba(255,255,255,0.25);
  color : #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px; 
`;

export const BannerTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 8px 0;
`;

export const BannerSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.85);
  margin: 0 0 16px 0;
`;

export const BannerButton = styled.button`
  background: #fff;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform  0.2s;

  &:hover {
    transform: scale(1.05);
    }
`;

export const BannerDots = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

export const Dot = styled.button<{active: boolean}>`
  width: ${({active}) => active ? '20px' : '8px'};
  height: 8px;
  background: ${({active}) => active ? '#fff' : 'rgba(255,255,255,0.5)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s;
`;

export const ArrowButton = styled.button<{direction: 'left' | 'right'}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({direction}) => direction === 'left' ? 'left: 16px;' : 'right: 16px;'}
  background: rgba(255,255,255,0.3);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s;
  z-index: 10;

  &:hover {
    background: rgba(255,255,255,0.5);
  }
`;