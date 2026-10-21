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
 font-size: 1.1rem;
 color: #ff6600;
 margin-botton: 16px;
 padding-botton: 8px;
 border-botton: 2px solid #ff660020; 
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
  margin-top: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--text);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff6600;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const PaymentsTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const PaymentTab = styled.div`
  padding: 10px 16px;
  border-radius: 8px;
  border: 2px solid ${({ active }) => active ? '#ff6600' : 'var(--border)'};
  background: ${({ active }) => active ? '#ff660015' : 'var(--bg-card)'};
  color: ${({ active }) => active ? '#ff6600' : 'var(--text)'};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    border-color: #ff6600;
  }
`;

export const CardBrands = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  align-items: center;
`;

export const CardBrand = styled.div`
  border: 2px solid ${({ selected }) => selected ? '#ff6600' : 'var(--border)'};
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ selected }) => selected ? '#ff6600' : 'var(--text-secondary)'};
  transition: all 0.2s;

  &:hover {
    border-color: #ff6600;
  }
`;

export const PixBox = styled.div`
  background: #f0fdf4;
  border: 2px dashed #86efac;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  color: #16a34a;

  p {
    margin: 8px 0 0 0;
    font-size: 0.9rem;
  }
`;

export const BoletoBox = styled.div`
  background: #fefce8;
  border: 2px dashed #fde047;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  color: #854d0e;

  p {
    margin: 8px 0 0 0;
    font-size: 0.9rem;
  }
`;

export const ResumeContainer = styled.div`

`;

export const Card = styled.div`

`;


export const ResumeItem = styled.div`

`;

export const ResumeItemInfo = styled.div`

`;

export const ResumeItemPrice = styled.div`

`;

export const ResumeTotal = styled.div`

`;

export const ResumeTotalRow = styled.div`

`;

export const ResumeTotalFinal = styled.div`

`;

export const FinalizarButton = styled.button`

`;

export const SelectInput = styled.select`

`;