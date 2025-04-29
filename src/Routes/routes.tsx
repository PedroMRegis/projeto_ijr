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
import Busca from "@/pages/Busca" 
import Carrinho from "@/pages/Carrinho/Carrinho"
import LoginCarrinho from "@/pages/Carrinho/LoginCarrinho"
import Entrega from "@/pages/Carrinho/Entrega"
import Pagamento from "@/pages/Carrinho/Pagamento"
import PedidoAcompanhamento from "@/pages/Carrinho/PedidoAcompanhamento"
import PaginaFuncionario from "@/pages/Paginafuncionário"
import EditarProduto from "@/pages/Editarproduto"
import NovoUploadDeImagem from "@/pages/NovoUploadDeImagem"

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
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/login-carrinho" element={<LoginCarrinho />} />
      <Route path="/entrega" element={<Entrega />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/pedido-acompanhamento" element={<PedidoAcompanhamento />} />
      <Route path="/pagina-funcionario" element={<PaginaFuncionario />} />
      <Route path="/editar-produto" element={<EditarProduto />} />
      <Route path="/upload-imagem" element={<NovoUploadDeImagem />} />
      
    </Routes>
  );
};

export default AppRoutes;

