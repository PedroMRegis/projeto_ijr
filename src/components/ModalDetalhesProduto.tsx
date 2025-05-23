import styled from "styled-components";
import { Produto } from "@/utils/FiltroProduto";
import { X, Minus, Plus } from "@phosphor-icons/react"; // pesquisei e achei a biblioteca Phosphor Icons, que é uma biblioteca de ícones para React, peguei dela o X, + e -.
import { useState } from "react"; // usei o usestate para controlar a quantidade de produtos que o usuário quer adicionar ao carrinho (serve para atualizar o estado das variáveis) e para criar essas variáveis.
import { useCart } from "@/contexts/CartContext"; // importei o hook que criamos para adicionar o produto ao carrinho

type ModalDetalhesProdutoProps = {
  produto: Produto;
  onClose: () => void;
};

const ModalDetalhesProduto = ({ produto, onClose }: ModalDetalhesProdutoProps) => {
  const [quantidade, setQuantidade] = useState(1);
  const [mensagemVisivel, setMensagemVisivel] = useState(false);

  const { adicionarAoCarrinho } = useCart();

  const aumentarQuantidade = () => setQuantidade((qtd) => qtd + 1);
  const diminuirQuantidade = () => {
    if (quantidade > 1) setQuantidade((qtd) => qtd - 1);
  };

  const handleAdicionarProduto = () => {
    adicionarAoCarrinho(produto, quantidade);
    setMensagemVisivel(true);
    setTimeout(() => setMensagemVisivel(false), 3000);
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <BotaoFechar onClick={onClose}>
          <X size={24} weight="bold" /> {/* X é o ícone de fechar, que peguei da biblioteca Phosphor Icons */}
        </BotaoFechar>

        <Conteudo>
          <Imagem src={produto.imagem} alt={produto.nome} />
          <Info>
            <Nome>{produto.nome}</Nome>
            <Precos>
              {produto.precoDe && <PrecoDe>R$ {produto.precoDe.toFixed(2)}</PrecoDe>}
              <PrecoPor>R$ {produto.precoPor.toFixed(2)}</PrecoPor>
            </Precos>
            <Descricao>{produto.descricao}</Descricao>

            <Contador>
              <BotaoContador onClick={diminuirQuantidade}>
                <Minus size={20} />
              </BotaoContador>
              <Quantidade>{quantidade}</Quantidade>
              <BotaoContador onClick={aumentarQuantidade}>
                <Plus size={20} />
              </BotaoContador>
            </Contador>

            <BotaoComprar onClick={handleAdicionarProduto}>
              Adicionar {quantidade} ao Carrinho
            </BotaoComprar>
          </Info>
        </Conteudo>

        {mensagemVisivel && (
          <MensagemAdicionado>Produto adicionado ao carrinho!</MensagemAdicionado>
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default ModalDetalhesProduto;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 950px;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 90%;
  }
`;

const BotaoFechar = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Conteudo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) { // função que pesquisei e faz o modal ser responsivo
    flex-direction: column; // faz com que mude de linha para coluna, se as telas forem menores que 768px (pesquisei e esse número é o mais comum para telas de celular)
    align-items: center;
  }
`;

const Imagem = styled.img`
  flex: 1;
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    max-width: 90%;
  }
`;

const Nome = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #023e8a;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Precos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrecoDe = styled.span`
  text-decoration: line-through;
  color: #888;
  font-size: 1rem;
`;

const PrecoPor = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #023e8a;
`;

const Descricao = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Contador = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BotaoContador = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e0e0e0;
  }
`;

const Quantidade = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

const BotaoComprar = styled.button`
  margin-top: 1rem;
  background-color: #023e8a;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const MensagemAdicionado = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #023e8a;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;