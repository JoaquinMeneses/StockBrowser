import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/RouterApp";
import { ThemeProvider } from "@material-tailwind/react";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <ThemeProvider>
        <RouterApp />
      </ThemeProvider>
    </BrowserRouter>
  );
}
