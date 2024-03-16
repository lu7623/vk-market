import { createRoot } from "react-dom/client";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./providers/redux-provider.tsx";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ConfigProvider>
        <AppProvider>
    <AdaptivityProvider>
      <AppRoot>
        <App />
      </AppRoot>
      </AdaptivityProvider>
      </AppProvider>
  </ConfigProvider>
);
