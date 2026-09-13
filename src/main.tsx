import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GameProvider } from "./context/GameContext";
import Contato from "./pages/Contato/Contato";
import Dashboard from "./pages/Dashboard/Dashboard";
import Fantasma from "./pages/Fantasma/Fantasma";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import IntegranteDetalhe from "./pages/IntegranteDetalhe/IntegranteDetalhe";
import Integrantes from "./pages/Integrantes/Integrantes";
import NotFound from "./pages/NotFound/NotFound";
import Ranking from "./pages/Ranking/Ranking";
import Sobre from "./pages/Sobre/Sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "integrantes/:id", element: <IntegranteDetalhe /> },
      { path: "sobre", element: <Sobre /> },
      { path: "faq", element: <Faq /> },
      { path: "contato", element: <Contato /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "ranking", element: <Ranking /> },
      { path: "fantasma", element: <Fantasma /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </StrictMode>,
);