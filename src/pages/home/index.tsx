import { Container, WelcomeSection, Title, Subtitle, ProductsGrid } from './styles';
import { ProductCard } from '../../components/ProdutCard';
import CimentoImg from '../../assets/cimento_cp_ii_e_32_50kg_csn_1079_1_20190801135404.webp';
import TijoloImg  from '../../assets/Qual_o_melhor_tijolo_para_sua_obra__4.webp';
import MadeiraImg from '../../assets/madesch-manutencao-da-madeira-tratada.jpg';
import PregoImg from '../../assets/Pregos-com-cabeca--600x386.webp';
import MangueiraImg from '../../assets/mangueira_de_jardim_15m_metros_reforcada_trancada_ledmang_2763_6_fdfab41b0759e35b369bf359dd1a8c57.webp';
import MarteloImg from '../../assets/OIP.webp';
import PaImg from '../../assets/D_NQ_NP_682038-MLU73331788328_122023-O.webp';
import MachadoImg from '../../assets/machado.webp';


export default function Home() {
  const products = [
    { image: CimentoImg, title: 'Cimento 50kg', price: 'R$ 25,00' },
    { image: TijoloImg, title: 'Tijolo 6 furos', price: 'R$ 1,50' },
    { image: MadeiraImg, title: 'Madeira Tratada', price: 'R$ 12,00' },
    { image: PregoImg,title:'Pregos',price:'R$0,60'},
    { image: MangueiraImg,title:'Mangueira',price:'R$15,60'},
    { image: MarteloImg,title:'Martelo',price:'R$59,90'},
    { image: PaImg,title:'Pá',price:'R$115,90'},
    { image: MachadoImg,title:'Machado',price:'R$300,90'}
  ];

  return (
    <Container>
      
      <WelcomeSection>
        <Title>Bem-vindo à Casa Abreu</Title>
        <Subtitle>Encontre tudo para sua obra com qualidade e bom preço.</Subtitle>
      </WelcomeSection>

      
      <h2>Produtos em Destaque</h2>
      <ProductsGrid>
        {products.map((p, index) => (
          <ProductCard 
            key={index} 
            image={p.image} 
            title={p.title} 
            price={p.price} 
          />
        ))}
      </ProductsGrid>
    </Container>
  );
}
