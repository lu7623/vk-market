import { CardGrid, Header } from "@vkontakte/vkui";
import ProductCard from "./ProductCard";

export default function CardList({ products }: { products: Product[] }) { 
  return ( <>
    <Header>products</Header>
    <CardGrid size="l" spaced>
      {products.map((p) => (
       <ProductCard product={p}/>
      ))}
    </CardGrid>
</>)
}