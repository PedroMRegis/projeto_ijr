import styled from "styled-components"
import { ShoppingCart, Trash, Minus, Plus } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useState } from "react"
import EtapasCarrinho from "@/components/EtapasCarrinho" 

const produtosCarrinho = [
  {
    id: 1,
    nome: "Mouse HP USB",
    imagem: "/src/assets/mouse.png",
    preco: 36.99,
    quantidade: 1
  },
  {
    id: 2,
    nome: "Monitor LG 22",
    imagem: "/src/assets/monitor_lg.png",
    preco: 759.00,
    quantidade: 1
  }
]

const Carrinho = () => {
  const [itens, setItens] = useState(produtosCarrinho)

  const aumentarQuantidade = (id: number) => {
    setItens(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    )
  }

  const diminuirQuantidade = (id: number) => {
    setItens(prev =>
      prev.map(item =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    )
  }

  const removerItem = (id: number) => {
    setItens(prev => prev.filter(item => item.id !== id))
  }

  return (
    <Container>
      <EtapasCarrinho etapaAtual={1} /> 

      {itens.length === 0 ? (
        <CarrinhoVazio>
          <ShoppingCart size={64} />
          <h2>Seu carrinho está vazio</h2>
          <p>Para continuar o processo de compra, navegue pelo site e adicione produtos ao carrinho</p>
          <BotaoEscolherItens to="/">ESCOLHER ITENS</BotaoEscolherItens>
        </CarrinhoVazio>
      ) : (
        <CarrinhoCheio>
          <Titulo>Meu carrinho</Titulo>
          {itens.map(item => (
            <Produto key={item.id}>
              <ImagemProduto src={item.imagem} alt={item.nome} />
              <NomeProduto>{item.nome}</NomeProduto>
              <QuantidadeControle>
                <BotaoQuantidade onClick={() => diminuirQuantidade(item.id)}>
                  <Minus size={16} />
                </BotaoQuantidade>
                <span>{item.quantidade}</span>
                <BotaoQuantidade onClick={() => aumentarQuantidade(item.id)}>
                  <Plus size={16} />
                </BotaoQuantidade>
              </QuantidadeControle>
              <PrecoProduto>R$ {(item.preco * item.quantidade).toFixed(2)}</PrecoProduto>
              <BotaoRemover onClick={() => removerItem(item.id)}>
                <Trash size={24} />
              </BotaoRemover>
            </Produto>
          ))}
          <BotoesCarrinho>
            <BotaoEscolherItens to="/">ADICIONAR MAIS ITENS</BotaoEscolherItens>
            <BotaoAvancar to="/login-carrinho">AVANÇAR</BotaoAvancar>
          </BotoesCarrinho>
        </CarrinhoCheio>
      )}
    </Container>
  )
}

export default Carrinho

const Container = styled.section`
  padding: 2rem;
  background-color: #f7f7f7;
  min-height: calc(100vh - 150px);
`

const CarrinhoVazio = styled.div`
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 8px;
  h2 {
    margin-top: 1rem;
    color: #023e8a;
  }
  p {
    margin: 1rem 0 2rem;
    color: #555;
  }
`

const CarrinhoCheio = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 1000px; 
  margin: 0 auto;
`

const Titulo = styled.h2`
  color: #023e8a;
  margin-bottom: 1rem;
`

const Produto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`

const ImagemProduto = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`

const NomeProduto = styled.div`
  flex: 1;
`

const QuantidadeControle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const BotaoQuantidade = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.25rem;
  cursor: pointer;
`

const PrecoProduto = styled.div`
  font-weight: bold;
  width: 80px;
  text-align: right;
  white-space: nowrap; /* pesquisei e isso serve para o preco nao separar em duas linhas, ja que separava quando era mais de 1000 reais */
`

const BotaoRemover = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  color: black;
`

const BotoesCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const BotaoEscolherItens = styled(Link)`
  border: 1px solid #023e8a;
  color: #023e8a;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background: #023e8a;
    color: white;
  }
`

const BotaoAvancar = styled(Link)`
  background: #023e8a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`
