import {
  View,
  Panel,
  Root,
  SplitLayout,
  SplitCol,
  Header,
  CardGrid,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import getProducts from "./api/getProducts";
import { useEffect, useState } from "react";
import Busket from "./components/Busket";
import { useAppDispatch } from "./store/store";
import { addProducts } from "./store/reducers/cartSlice";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data ? data : []);
      dispatch(
        addProducts(
          products.map((p) => {
            return { productName: p.title, qty: p.quantity, price: p.price };
          })
        )
      );
    };
    getData();
  }, []);

  const handleDelete = (name: string) => {
    const currProd = products.filter((p) => p.title !== name);
    setProducts(currProd);
  };
  return (
    <Root activeView="view">
      <View id="view" activePanel="main">
        <Panel id="main">
          <SplitLayout>
            <SplitCol width={900}>
              <Header>products</Header>
              <CardGrid size="l" spaced>
                {products.map((p) => (
                  <ProductCard product={p} callback={handleDelete} />
                ))}
              </CardGrid>
            </SplitCol>
            <SplitCol width={300}>
              <Busket />
            </SplitCol>
          </SplitLayout>
        </Panel>
      </View>
    </Root>
  );
}
