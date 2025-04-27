import styled from "styled-components"
import { Produto } from "@/utils/FiltroProduto"
import { X, Minus, Plus } from "@phosphor-icons/react" // pesquisei e achei a biblioteca Phosphor Icons, que é uma biblioteca de ícones para React, peguei dela o X, + e -. 
import { useState } from "react" // usei o usestate para controlar a quantidade de produtos que o usuário quer adicionar ao carrinho (serve para atualizar o estado das variaveis) e para criar essas variaveis.

type ModalDetalhesProdutoProps = {
  produto: Produto
  onClose: () => void
}

const ModalDetalhesProduto = ({ produto, onClose }: ModalDetalhesProdutoProps) => {
  const [quantidade, setQuantidade] = useState(1)

  const aumentarQuantidade = () => {
    setQuantidade((qtd) => qtd + 1) 
  }

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade((qtd) => qtd - 1)
    }
  }

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
              {produto.precoDe && <PrecoDe>R$ {produto.precoDe}</PrecoDe>}
              <PrecoPor>R$ {produto.precoPor}</PrecoPor>
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

            <BotaoComprar>Adicionar {quantidade} ao Carrinho</BotaoComprar>
          </Info>
        </Conteudo>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalDetalhesProduto

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
`

const ModalContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 950px;
  padding: 2rem;
  position: relative;
`

const BotaoFechar = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`

const Conteudo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) { //funcao que pesquisei e faz o modal ser responsivo
    flex-direction: column; // faz com que mude de linha para coluna, se as telas forem menores que 768 px (pesquisei e esse numero é o mais comum para telas de celular)
  }
`

const Imagem = styled.img`
  flex: 1;
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: contain;
`

const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Nome = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #023e8a;
`

const Precos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const PrecoDe = styled.span`
  text-decoration: line-through;
  color: #888;
  font-size: 1rem;
`

const PrecoPor = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #023e8a;
`

const Descricao = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
`

const Contador = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`

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
`

const Quantidade = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`

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
`