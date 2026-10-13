import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 20px;
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 30px;

    @media(max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    color: var(--text);
    margin-bottom: 24px;
    grid-column: 1 / -1;
`;

export const Section = styled.section`
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px var(--shadow);
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`

`;

export const Label = styled.label`

`;

export const Input = styled.input`

`;

export const Grid2 = styled.div`

`;

export const PaymentsTabs = styled.div`

`;

export const PaymentTab = styled.div`

`;

export const CardBrands = styled.div`

`;

export const CardBrand = styled.div`

`;

export const PixBox = styled.div`

`;

export const BoletoBox = styled.div`

`;

export const ResumeContainer = styled.div`

`;

