import {ProductCard} from "../../components/ProdutCard";
import { Container, Title, Grid, CategoryTitle, Divider } from "./styles";
import CimentoImg from "../../assets/cimento_cp_ii_e_32_50kg_csn_1079_1_20190801135404.webp";
import TijoloImg from "../../assets/Qual_o_melhor_tijolo_para_sua_obra__4.webp";
import MadeiraImg from "../../assets/madesch-manutencao-da-madeira-tratada.jpg";
import PregoImg from "../../assets/Pregos-com-cabeca--600x386.webp";
import MarteloImg from "../../assets/OIP.webp";
import PaImg from "../../assets/D_NQ_NP_682038-MLU73331788328_122023-O.webp";
import MachadoImg from "../../assets/machado.webp";


interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

interface Category {
  name: string;
  products: Product[];
}

const categories: Category[] = [
    {
        name:"Materias de construção",
        products: [
           {id: 1,image:CimentoImg, title: "Cimento", price: "R$30,00"},
           {id: 2,image:TijoloImg,title: "Tijolo", price: "R$1,50"},
           {id: 3,image:MadeiraImg,title: "Madeira", price: "R$50,00"},
           {id: 4,image:PregoImg,title: "Prego", price: "$R$0,10"},
        ]
    },

    {
        name:"Ferramentas",
        products: [
           {id: 5,image:MarteloImg, title: "Martelo", price:"R$20,00" },
           {id: 6,image:PaImg,title: "Pá", price: "R$25,00"},
           {id: 7,image:MachadoImg,title: "Machado", price: "R$80,00"},
        ]
    },
]

export default function Products() {
    return (
        <Container>
            <Title>Todos os produtos</Title>
            {categories.map((cat) => (
                <div key={cat.name}>
                   <CategoryTitle>{cat.name}</CategoryTitle>
                   <Grid>
                      {cat.products.map((p, i) => (
                       <ProductCard key={p.id} id={p.id} image={p.image} title={p.title} price={p.price} />
                      ))}
                   </Grid>
                   <Divider />
                </div>
            ))}
        </Container>
    );
}