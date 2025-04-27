import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Orcamento from "@/pages/Orcamento";
import Suprimentos from "@/pages/Suprimentos";
import Moveis from "@/pages/Moveis";
import Eletronicos from "@/pages/Eletronicos";
import Nossaloja from "@/pages/NossaLoja";
import Login from "@/pages/Login";
import LoginFuncionario from "@/pages/LoginFuncionario";
import CriarConta from "@/pages/CriarConta";
import Busca from "@/pages/Busca";

type AppRoutesProps = {
  setBusca: (valor: string) => void;
  termoBusca: string;
};

const AppRoutes = ({ setBusca, termoBusca }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home setBusca={setBusca} termoBusca={termoBusca} />} />
      <Route path="/orcamento" element={<Orcamento setBusca={setBusca} termoBusca={termoBusca} />} />
      <Route path="/suprimentos" element={<Suprimentos setBusca={setBusca} termoBusca={termoBusca} />} />
      <Route path="/moveis" element={<Moveis setBusca={setBusca} termoBusca={termoBusca} />} />
      <Route path="/eletronicos" element={<Eletronicos setBusca={setBusca} termoBusca={termoBusca} />} />
      <Route path="/nossa-loja" element={<Nossaloja setBusca={setBusca} termoBusca={termoBusca} />} />
      <Route path="/busca" element={<Busca setBusca={setBusca} termoBusca={termoBusca} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-funcionario" element={<LoginFuncionario />} />
      <Route path="/criar-conta" element={<CriarConta />} />
    </Routes>
  );
};

export default AppRoutes;
