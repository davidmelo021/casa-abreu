import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const HamburgerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: relative; 
`;
export const LeftSide = styled.div`
 display: flex;
 align-items: center;
 gap: 15px; 
`;

export const HamburgerImage = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Logo = styled.img.attrs({ alt: "Logo da empresa" })`
  width: 80px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

export const CompanyName = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  background: #fff;
  z-index: 999;
`;