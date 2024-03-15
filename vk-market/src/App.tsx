import "./App.css";
import { View, Panel, PanelHeader, Root } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import getProducts from "./api/getProducts";
import { useEffect, useState } from "react";

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
    <Root activeView="view">
      <View id="view" activePanel='main'>
        <Panel id="main">
          <PanelHeader>Basket app</PanelHeader>
          {
            products.map((p) => { return <p>{p.title}</p> })
          }
        </Panel>
      </View>
    </Root>
  );
}