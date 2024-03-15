import "./App.css";
import { View, Panel, PanelHeader, Root } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

export default function App() {
  return (
    <Root activeView="view">
      <View id="view" activePanel='main'>
        <Panel id="main">
          <PanelHeader>Basket app</PanelHeader>
          
        </Panel>
      </View>
    </Root>
  );
}