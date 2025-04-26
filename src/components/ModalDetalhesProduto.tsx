import styled from "styled-components"
import { Produto } from "@/utils/FiltroProduto"
import { X } from "@phosphor-icons/react"

type ModalDetalhesProdutoProps = {
  produto: Produto
  onClose: () => void
}

const ModalDetalhesProduto = ({ produto, onClose }: ModalDetalhesProdutoProps) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <BotaoFechar onClick={onClose}>
          <X size={24} weight="bold" />
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

            <BotaoComprar>Adicionar ao Carrinho</BotaoComprar>
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
`

const ModalContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 900px;
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
`

const Imagem = styled.img`
  flex: 1;
  max-width: 350px;
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
  font-size: 1.8rem;
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
`

const BotaoComprar = styled.button`
  margin-top: 1rem;
  background-color: #023e8a;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`