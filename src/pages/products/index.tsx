import {ProdutCard} from "../../components/ProdutCard";
import styled from "styled-components";
import CimentoImg from "../../assets/cimento_cp_ii_e_32_50kg_csn_1079_1_20190801135404.webp";
import TijoloImg from "../../assets/Qual_o_melhor_tijolo_para_sua_obra__4.webp";
import MadeiraImg from "../../assets/madesch-manutencao-da-madeira-tratada.jpg";
import PregoImg from "../../assets/Pregos-com-cabeca--600x386.webp";
import MarteloImg from "../../assets/OIP.webp";
import PaImg from "../../assets/D_NQ_NP_682038-MLU73331788328_122023-O.webp";
import MachadoImg from "../../assets/machado.webp";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 30px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const categories = [
    {
        name:"Materias de construção",
        products: [
           {image:CimentoImg, title: "Cimento", price: 30.00},
           {image:TijoloImg,title: "Tijolo", price: 1.50},
           {image:MadeiraImg,title: "Madeira", price: 50.00},
           {image:PregoImg,title: "Prego", price: 0.10},
        ]
    },

    {
        name:"Ferramentas",
        products: [
           {image:MarteloImg, title: "Martelo", price:20.00 },
           {image:PaImg,title: "Pá", price: 25.00},
           {image:MachadoImg,title: "Machado", price: 80.00},
        ]
    },
]

export default function Products() {
    return (
        <Container>
            <Title>Todos os produtos</Title>
            {categories.map((cat)=>(
                <div key={cat.name}>
                   <h2 style={{ color: '#ff6600', marginBottom: '16px' }}>{cat.name}</h2>
                   <Grid>
                    
                   </Grid>
                </div>
            ))}
        </Container>
    );
}