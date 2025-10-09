import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  width: 100%;
  min-height: calc(100vh - 70px); /* ajusta altura da tela abaixo do header */

  h2 {
    font-size: 1.5rem;
    color: #222;
    margin-bottom: 15px;
    margin-top: 40px;
  }
`;

/* Área do texto de boas-vindas */
export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%);
  padding: 60px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 0;
`;

/* Área dos produtos */
export const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
