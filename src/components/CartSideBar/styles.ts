import styled from "styled-components";

export const Overlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Container = styled.div<{ open: boolean }>`
  width: 380px;
  height: 100%;
  background: #fafafa;
  position: fixed;
  right: ${({ open }) => (open ? '0' : '-400px')};
  top: 0;
  transition: right 0.3s ease;
  z-index: 1000;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: #fff;
  border-bottom: 1px solid #eee;

  h2 {
    margin: 0;
    font-size: 1.3rem;
    color: #222;
  }

  span {
    background: #ff6600;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 12px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.3rem;
  color: #999;
  cursor: pointer;
  padding: 4px;
  line-height: 1;

  &:hover {
    color: #222;
  }
`;

export const EmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  padding: 40px 20px;
  text-align: center;

  svg {
    margin-bottom: 16px;
    opacity: 0.4;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const ItemsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;

export const ItemImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;

  p:first-child {
    font-weight: 600;
    color: #222;
    margin: 0 0 4px 0;
    font-size: 0.95rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const QtyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

export const QtyButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #fff;
  color: #555;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  &:hover {
    border-color: #ff6600;
    color: #ff6600;
  }
`;

export const ItemPrice = styled.p`
  color: #ff6600;
  font-weight: 700;
  margin: 0;
  font-size: 0.95rem;
  white-space: nowrap;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    color: #ff3333;
  }
`;

export const Footer = styled.div`
  padding: 20px 24px;
  background: #fff;
  border-top: 1px solid #eee;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  span:first-child {
    font-size: 1rem;
    color: #555;
  }

  span:last-child {
    font-size: 1.4rem;
    font-weight: 700;
    color: #222;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: #ff6600;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e05500;
  }
`;