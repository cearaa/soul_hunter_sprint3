import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Sobre from "./pages/Sobre/Sobre";

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Route>
    </GameProvider>
  );
}
