import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Orcamento from "@/pages/Orcamento"
import Suprimentos from "@/pages/Suprimentos"
import Moveis from "@/pages/Moveis"
import Eletronicos from "@/pages/Eletronicos"
import Nossaloja from "@/pages/NossaLoja"
import Login from "@/pages/Login"
import LoginFuncionario from "@/pages/LoginFuncionario"
import CriarConta from "@/pages/CriarConta"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orcamento" element={<Orcamento />} />
      <Route path="/suprimentos" element={<Suprimentos />} />
      <Route path="/moveis" element={<Moveis />} />
      <Route path="/eletronicos" element={<Eletronicos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-funcionario" element={<LoginFuncionario />} />
      <Route path="/nossa-loja" element={<Nossaloja />} />
      <Route path="/criar-conta" element={<CriarConta />} />
    </Routes>
  )
}

export default AppRoutes
