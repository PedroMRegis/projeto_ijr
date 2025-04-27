import styled from "styled-components"
import { Link } from "react-router-dom"
import EtapasCarrinho from "@/components/EtapasCarrinho" 

const Entrega = () => {
  return (
    <Container>
      <EtapasCarrinho etapaAtual={3} /> 

      <FormContainer>
        <Titulo>Escolha o método de entrega</Titulo>

        <OpcaoEntrega>
          <input type="radio" id="endereco" name="entrega" defaultChecked />
          <LabelOpcao htmlFor="endereco">Entregar em um endereço</LabelOpcao>
        </OpcaoEntrega>

        <CampoEndereco placeholder="Endereço completo" />

        <OpcaoEntrega>
          <input type="radio" id="retirada" name="entrega" />
          <LabelOpcao htmlFor="retirada">Retirar na loja</LabelOpcao>
        </OpcaoEntrega>

        <BotaoAvancar to="/pagamento">AVANÇAR</BotaoAvancar>
      </FormContainer>
    </Container>
  )
}

export default Entrega

const Container = styled.section`
  padding: 2rem;
  background-color: #f7f7f7;
  min-height: calc(100vh - 150px);
`

const FormContainer = styled.form`
  background: white;
  max-width: 550px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Titulo = styled.h2`
  color: #023e8a;
  text-align: center;
  margin-bottom: 1rem;
`

const OpcaoEntrega = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0;
`

const LabelOpcao = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`

const CampoEndereco = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`

const BotaoAvancar = styled(Link)`
  margin-top: 2rem;
  background-color: #023e8a;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`