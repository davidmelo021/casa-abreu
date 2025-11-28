import styled from 'styled-components';

export const Card = styled.div`
  width: 200px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

export const CardPrice = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e3a8a;
`;
