import { View, Panel, Root, CardGrid, SplitLayout, AppRoot, SplitCol, Header } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import getProducts from "./api/getProducts";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [products, setProducts]=useState<Product[]>([])
  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data ? data : [])
    }
    getData();
} )
  return (
    <AppRoot>
      <Root activeView="view">
        <View  id='view' activePanel="main">
          <Panel id='main'>
          <SplitLayout>
            <SplitCol  width={800}>
                <Header>products</Header>
                <CardGrid size="l" spaced>
                  {products.map(p => <ProductCard product={p} />)}
                  </CardGrid>
            </SplitCol>
            <SplitCol width={500}>
              <Header>busket</Header>
            </SplitCol>
            </SplitLayout>
            </Panel>
          </View>
        </Root>
        </AppRoot>
  );
}