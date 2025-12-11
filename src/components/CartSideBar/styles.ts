import styled from "styled-components";

export const Overlay = styled.div<{open: boolean}>`
  display: ${({open}) => (open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const Container = styled.div<{open: boolean}>`
  width: 320px;
  height: 100%;
  background: #fff;
  position: fixed;
  right: ${({open}) => (open ? '0' : '-340px')};
  top: 0;
  transition: right 0.3s ease;
  padding: 20px;
  z-index: 1000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);

  h2 {
    margin-top: 0;
  }

  button {
    background: red;
    color: white;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
`;