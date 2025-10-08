import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px; /* reduzimos a altura do header */
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* diminui espaçamento */
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
  justify-content: center; /* centraliza verticalmente */
`;

export const Logo = styled.img.attrs({ alt: 'Logo da empresa' })`
  width: 80px; /* diminui tamanho da logo */
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

export const CompanyName = styled.h1`
  font-size: 1rem; /* título menor */
  font-weight: 600;
  color: #222;
  margin: 0; /* remove margens para não empurrar menu lateral */
`;
