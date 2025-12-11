import styled from "styled-components";

export const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
  z-index: 10000;

  img {
    width: 32px;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const Badge = styled.span`
  position: absolute;
  background: red;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
  right: -5px;
  top: -5px;
`;