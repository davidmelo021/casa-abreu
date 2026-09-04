import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, WelcomeSection, Title, Subtitle, ProductsGrid, BannerContainer, BannerSlide, BannerTitle,BannerTag, BannerSubtitle, BannerButton, BannerDots, 
Dot,ArrowButton} from './styles';
import { ProductCard } from '../../components/ProdutCard';
import CimentoImg from '../../assets/cimento_cp_ii_e_32_50kg_csn_1079_1_20190801135404.webp';
import TijoloImg  from '../../assets/Qual_o_melhor_tijolo_para_sua_obra__4.webp';
import MadeiraImg from '../../assets/madesch-manutencao-da-madeira-tratada.jpg';
import PregoImg from '../../assets/Pregos-com-cabeca--600x386.webp';
import MangueiraImg from '../../assets/mangueira_de_jardim_15m_metros_reforcada_trancada_ledmang_2763_6_fdfab41b0759e35b369bf359dd1a8c57.webp';
import MarteloImg from '../../assets/OIP.webp';
import PaImg from '../../assets/D_NQ_NP_682038-MLU73331788328_122023-O.webp';
import MachadoImg from '../../assets/machado.webp';



  const banners = [
    {
      bg:'linear-gradient(135deg, #ff6600 0%, #ff9500 100%)',
      tag: 'Oferta especial',
      title: 'Cimento com 15% OFF',
      subtitle: 'Aproveite a promoção por tempo limitado e garanta o melhor preço para sua obra.',
      button: 'Ver Produtos',
      route: '/products',
    },

    {
      bg:'linear-gradient(135deg, #00ccff 0%, #0099ff 100%)',
      tag: 'Novidade',
      title: 'Chegou a nova linha de ferramentas',
      subtitle: 'Descubra a nova linha de ferramentas de alta qualidade para sua obra.',
      button: 'Ver Ferramentas',
      route: '/products',
    },

    {
      bg: 'linear-gradient(135deg, #166534 0%, #16a34a 100%)',
      tag: 'Jardins',
      title: 'Tudo para o seu jardim',
      subtitle: 'Durabilidade e qualidade para o seu jardim',
      button: 'Ver Produtos',
      route: '/products',
    },
  ];

  export default function Home() {
    const [bannerActive,setBannerActive] = useState(0);
    const navigate = useNavigate();

    useEffect(() =>{
      const interval = setInterval (() =>{
        setBannerActive((prev) => (prev + 1) % banners.length);
      },4000);

      return () => clearInterval(interval);
    },[]);

  const products = [
    { id:1,image: CimentoImg, title: 'Cimento 50kg', price: 'R$ 30,00' },
    { id:2,image: TijoloImg, title: 'Tijolo 6 furos', price: 'R$ 1,50' },
    { id:3,image: MadeiraImg, title: 'Madeira Tratada', price: 'R$ 12,00' },
    { id:4,image: PregoImg,title:'Pregos',price:'R$0,60'},
    { id:5,image: MangueiraImg,title:'Mangueira',price:'R$15,60'},
    { id:6,image: MarteloImg,title:'Martelo',price:'R$59,90'},
    { id:7,image: PaImg,title:'Pá',price:'R$115,90'},
    { id:8,image: MachadoImg,title:'Machado',price:'R$300,90'}
  ];

  const banner = banners[bannerActive];

  return (
    <Container>
      <WelcomeSection>
        <Title>Bem vindo a Casa Abreu</Title>
        <Subtitle>Encontre os melhores produtos para sua obra</Subtitle>
      </WelcomeSection>

      <BannerContainer>
        <BannerSlide key={bannerActive} bg={banner.bg}>
          <BannerTag>{banner.tag}</BannerTag>
          <BannerTitle>{banner.title}</BannerTitle>
          <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
          <BannerButton onClick={() => navigate(banner.route)}>
            {banner.button}
          </BannerButton>
        </BannerSlide>

        <BannerDots>
          {banners.map((_,i) => (
            <Dot key={i} active={i===bannerActive} onClick={() => setBannerActive(i)}/>
          ))}
        </BannerDots>
      </BannerContainer>

      <h2>Produtos em destaque!</h2>
      <ProductsGrid>
        {products.map((p) =>(
          <ProductCard
            key={p.id}
            id={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
          />
        ))}
      </ProductsGrid>
    </Container>
  );
 
}
