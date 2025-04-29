import styled from "styled-components"
import { Produto } from "@/utils/FiltroProduto"

type CardProdutoProps = {
  produto: Produto
  onDetalhes: (produto: Produto) => void
}

const CardProduto = ({ produto, onDetalhes }: CardProdutoProps) => {
  return (
    <Card>
      <Imagem src={produto.imagem} alt={produto.nome} />
      <Titulo>{produto.nome}</Titulo>

      {produto.precoDe && <PrecoAntigo>De: R$ {produto.precoDe.toFixed(2)}</PrecoAntigo>}
      <PrecoNovo>Por: R$ {produto.precoPor.toFixed(2)} à vista</PrecoNovo>

      <Botao onClick={() => onDetalhes(produto)}>Mais Detalhes</Botao>
    </Card>
  )
}

export default CardProduto

const Card = styled.div`
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 13rem;
  width: 100%;
`

const Imagem = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  margin-bottom: 0.75rem;
`

const Titulo = styled.h3`
  font-size: 0.7rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
`

const PrecoAntigo = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.5rem;
`

const PrecoNovo = styled.strong`
  color: #0254b8;
  font-size: 0.75rem;
  margin: 0.25rem 0;
`

const Botao = styled.button`
  background-color: #023e8a;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    opacity: 0.9;
  }
`