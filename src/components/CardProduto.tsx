import styled from "styled-components"

type CardProdutoProps = {
  imagem: string
  nome: string
  precoDe?: string
  precoPor: string
  tipo: string
}

const CardProduto = ({ imagem, nome, precoDe, precoPor,tipo }: CardProdutoProps) => {
  return (
    <Card>
      <Imagem src={imagem} alt={nome} />
      <Titulo>{nome}</Titulo>
      {precoDe && <PrecoAntigo>De: R$ {precoDe}</PrecoAntigo>}
      <PrecoNovo>Por: R$ {precoPor} à vista</PrecoNovo>
      <Botao>Mais Detalhes</Botao>
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
  transition: transform 0.2s, box-shadow 0.2s;

   &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
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
