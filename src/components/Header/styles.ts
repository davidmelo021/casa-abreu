import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
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

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f3f3f3;
  border-radius: 20px;
  padding: 6px 14px;
  gap: 8px;
  flex: 1;
  max-width: 400px;
  margin: 0 20px;
  margin-top: 12px;

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 0.95rem;
    width: 100%;
    color: #333;

    &::placeholder {
      color: #aaa;
    }
  }

  span {
    color: #aaa;
    font-size: 1rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #ff6600;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  flex-shrink: 0;
`;

export const UserName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;

  @media (max-width: 600px) {
    display: none;
  }
`;