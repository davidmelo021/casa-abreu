import styled from 'styled-components';

interface SidebarProps {
  open: boolean;
}

export const Container = styled.aside<SidebarProps>`
  position: fixed;
  top: 70px; /* igual à altura do header */
  left: 0;
  width: ${({ open }) => (open ? '220px' : '0')};
  height: calc(100vh - 70px); /* ocupa o restante da tela */
  background-color: #000000ff;
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  z-index: 999; /* abaixo do header */
`;

export const MenuItem = styled.div`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #ff6600;
  }
`;
