import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
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

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="integrantes" element={<Integrantes />} />
            <Route path="integrantes/:id" element={<IntegranteDetalhe />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contato" element={<Contato />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="fantasma" element={<Fantasma />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}
