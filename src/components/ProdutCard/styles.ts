import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--bg-card);
  border-radius: 8px;
  box-shadow: 0 2px 5px var(--shadow);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  button {
    margin-top: 8px;
    padding: 8px;
    background: #ff6600;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background: black;
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 5px;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff6600;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;