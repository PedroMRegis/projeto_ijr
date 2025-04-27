import styled from "styled-components"

interface StepsCarrinhoProps {
  etapaAtual: number
}

const StepsCarrinho = ({ etapaAtual }: StepsCarrinhoProps) => {
  const etapas = ["Carrinho", "Login", "Entrega", "Pagamento"]

  return (
    <ContainerEtapas>
      {etapas.map((etapa, index) => {
        const numero = index + 1
        const ativo = numero === etapaAtual
        return (
          <Etapa key={etapa}>
            <Circulo ativo={ativo}>{numero}</Circulo>
            <Legenda ativo={ativo}>{etapa}</Legenda>
          </Etapa>
        )
      })}
    </ContainerEtapas>
  )
}

export default StepsCarrinho

const ContainerEtapas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-bottom: 2rem;
`

const Etapa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Circulo = styled.div<{ ativo: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ ativo }) => (ativo ? "#023e8a" : "#ccc")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const Legenda = styled.div<{ ativo: boolean }>`
  font-size: 0.9rem;
  font-weight: ${({ ativo }) => (ativo ? "bold" : "normal")};
  color: ${({ ativo }) => (ativo ? "#023e8a" : "#777")};
  text-align: center;
`