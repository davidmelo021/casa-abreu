import { useState } from 'react';
import { ProductCard } from "../../components/ProdutCard";
import { Container, Title, Grid, CategoryTitle, Divider, PageLayout, FilterSidebar, FilterOption, ProductsArea } from "./styles";
import { useSearch } from "../../context/SearchContext";
import CimentoImg from "../../assets/cimento_cp_ii_e_32_50kg_csn_1079_1_20190801135404.webp";
import TijoloImg from "../../assets/Qual_o_melhor_tijolo_para_sua_obra__4.webp";
import MadeiraImg from "../../assets/madesch-manutencao-da-madeira-tratada.jpg";
import PregoImg from "../../assets/Pregos-com-cabeca--600x386.webp";
import MarteloImg from "../../assets/OIP.webp";
import PaImg from "../../assets/parquet.png";
import MachadoImg from "../../assets/machado.webp";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  numericPrice: number;
}

interface Category {
  name: string;
  products: Product[];
}

const categories: Category[] = [
  {
    name: "Materiais de construção",
    products: [
      { id: 1, image: CimentoImg, title: "Cimento 50kg",   price: "R$ 30,00", numericPrice: 30 },
      { id: 2, image: TijoloImg,  title: "Tijolo 6 furos", price: "R$ 1,50",  numericPrice: 1.5 },
      { id: 3, image: MadeiraImg, title: "Madeira Tratada", price: "R$ 50,00", numericPrice: 50 },
      { id: 4, image: PregoImg,   title: "Prego",           price: "R$ 0,10",  numericPrice: 0.1 },
    ]
  },
  {
    name: "Ferramentas",
    products: [
      { id: 5, image: MarteloImg, title: "Martelo", price: "R$ 20,00", numericPrice: 20 },
      { id: 6, image: PaImg,      title: "Pá",      price: "R$ 25,00", numericPrice: 25 },
      { id: 7, image: MachadoImg, title: "Machado", price: "R$ 80,00", numericPrice: 80 },
    ]
  },
];

type Ordenacao = 'padrao' | 'menor' | 'maior';

export default function Products() {
  const { query } = useSearch();
  const [ordenacao, setOrdenacao] = useState<Ordenacao>('padrao');

  const categoriasFiltradas = categories
    .map(cat => ({
      ...cat,
      products: cat.products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
    }))
    .filter(cat => cat.products.length > 0);

  const categoriasOrdenadas = categoriasFiltradas.map(cat => ({
    ...cat,
    products: [...cat.products].sort((a, b) => {
      if (ordenacao === 'menor') return a.numericPrice - b.numericPrice;
      if (ordenacao === 'maior') return b.numericPrice - a.numericPrice;
      return 0;
    })
  }));

  const totalResults = categoriasOrdenadas.reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <Container>
      <Title>Todos os produtos</Title>

      {query && (
        <p style={{ color: '#888', marginBottom: '16px' }}>
          {totalResults} resultado(s) para "<strong>{query}</strong>"
        </p>
      )}

      <PageLayout>
        <FilterSidebar>
          <h3>🔃 Ordenar por preço</h3>
          <FilterOption active={ordenacao === 'padrao'} onClick={() => setOrdenacao('padrao')}>
            Padrão
          </FilterOption>
          <FilterOption active={ordenacao === 'menor'} onClick={() => setOrdenacao('menor')}>
            Menor preço
          </FilterOption>
          <FilterOption active={ordenacao === 'maior'} onClick={() => setOrdenacao('maior')}>
            Maior preço
          </FilterOption>
        </FilterSidebar>

        <ProductsArea>
          {categoriasOrdenadas.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#888', marginTop: '40px', fontSize: '1.1rem' }}>
              😕 Nenhum produto encontrado para "<strong>{query}</strong>"
            </p>
          ) : (
            categoriasOrdenadas.map((cat) => (
              <div key={cat.name}>
                <CategoryTitle>{cat.name}</CategoryTitle>
                <Grid>
                  {cat.products.map((p) => (
                    <ProductCard
                      key={p.id}
                      id={p.id}
                      image={p.image}
                      title={p.title}
                      price={p.price}
                    />
                  ))}
                </Grid>
                <Divider />
              </div>
            ))
          )}
        </ProductsArea>
      </PageLayout>
    </Container>
  );
}

