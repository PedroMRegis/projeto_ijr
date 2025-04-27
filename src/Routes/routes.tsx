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
import Carrinho from "@/pages/Carrinho/Carrinho"
import LoginCarrinho from "@/pages/Carrinho/LoginCarrinho"
import Entrega from "@/pages/Carrinho/Entrega"
import Pagamento from "@/pages/Carrinho/Pagamento"
import PedidoAcompanhamento from "@/pages/Carrinho/PedidoAcompanhamento"


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
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/login-carrinho" element={<LoginCarrinho />} />
      <Route path="/entrega" element={<Entrega />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/pedido-acompanhamento" element={<PedidoAcompanhamento />} />
    </Routes>
  )
}

export default AppRoutes
