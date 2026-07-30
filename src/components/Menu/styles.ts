import styled from 'styled-components';

interface SidebarProps {
  open: boolean;
}

export const Container = styled.aside<SidebarProps>`
  position: fixed;
  top: 70px;
  left: 0;
  width: ${({ open }) => (open ? '220px' : '0')};
  height: calc(100vh - 70px);
  background-color: #111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  z-index: 999;
`;

export const MenuItem = styled.div`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #fff;
  white-space: nowrap;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #ff6600;
    color: #fff;
  }
`;
