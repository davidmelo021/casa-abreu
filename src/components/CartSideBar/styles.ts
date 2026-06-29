import styled from "styled-components";

export const Overlay = styled.div<{open: boolean}>`
  display: ${({open}) => (open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Container = styled.div<{open: boolean}>`
  width: 380px;
  height: 100%;
  background: #fafafa;
  position: fixed;
  right: ${({open}) => (open ? '0' : '-400px')};
  top: 0;
  transition: right 0.3s ease;
  z-index: 1000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  
`;