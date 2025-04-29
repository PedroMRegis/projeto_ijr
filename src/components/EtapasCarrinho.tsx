import styled from "styled-components"
import { useNavigate } from "react-router-dom"

interface StepsCarrinhoProps {
  etapaAtual: number
}

const StepsCarrinho = ({ etapaAtual }: StepsCarrinhoProps) => {
  const navigate = useNavigate()

  const etapas = ["Carrinho", "Login", "Entrega", "Pagamento"]

  const voltarEtapa = () => {
    const rotas = ["/carrinho", "/login-carrinho", "/entrega", "/pagamento"];
    if (etapaAtual > 1) {
      navigate(rotas[etapaAtual - 2])
    }
  }

  return (
    <ContainerEtapas>
      {etapaAtual > 1 && (
        <Voltar onClick={voltarEtapa}>
          Voltar
        </Voltar>
      )}

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
  flex-wrap: wrap;
  position: relative;
`

const Voltar = styled.a`
  position: absolute;
  left: 1.5rem; 
  top: 0;
  font-size: 1rem;
  color: #023e8a;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 768px) {
    left: 1rem; 
    font-size: 0.95rem;
  }
`;

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