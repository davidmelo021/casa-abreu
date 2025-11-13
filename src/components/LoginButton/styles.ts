import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 1000;

  &:hover {
    background-color: #e55c00;
  }
`;