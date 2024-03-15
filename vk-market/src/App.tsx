import { View, Panel, Root, SplitLayout, SplitCol } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import getProducts from "./api/getProducts";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Busket from "./components/Busket";
import { AppProvider } from "./providers/redux-provider";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data ? data : []);
    };
    getData();
  });
  return (
    <AppProvider>
    <Root activeView="view">
      <View id="view" activePanel="main">
        <Panel id="main">
          <SplitLayout>
            <SplitCol width={900}>
              <CardList products={products} />
            </SplitCol>
            <SplitCol width={300}>
              <Busket />
            </SplitCol>
          </SplitLayout>
        </Panel>
      </View>
      </Root>
      </AppProvider>
  );
}
