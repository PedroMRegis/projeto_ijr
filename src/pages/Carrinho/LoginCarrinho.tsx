import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import EtapasCarrinho from "@/components/EtapasCarrinho"

const LoginCarrinho = () => {
  const navigate = useNavigate()

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    navigate("/entrega")
  }

  return (
    <Container>
      <EtapasCarrinho etapaAtual={2} /> 

      <FormContainer onSubmit={handleLogin}>
        <Titulo>Acesse sua conta</Titulo>

        <Label htmlFor="email">E-mail</Label>
        <Input type="email" id="email" placeholder="Email*" />

        <Label htmlFor="senha">Senha</Label>
        <Input type="password" id="senha" placeholder="Senha*" />

        <BotaoEntrar type="submit">ENTRAR</BotaoEntrar>

        <Separador>
          <Linha />
          <span>Não tem uma conta?</span>
          <Linha />
        </Separador>

        <LinkCriarConta to="/criar-conta">CRIAR CONTA</LinkCriarConta>
      </FormContainer>
    </Container>
  )
}

export default LoginCarrinho

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
`

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`

const BotaoEntrar = styled.button`
  margin-top: 1rem;
  background-color: #023e8a;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

const Separador = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: #555;

  span {
    white-space: nowrap;
  }
`

const Linha = styled.hr`
  flex: 1;
  border: none;
  height: 1px;
  background: #ccc;
`

const LinkCriarConta = styled(Link)`
  text-align: center;
  border: 1px solid #023e8a;
  padding: 0.75rem;
  border-radius: 4px;
  color: #023e8a;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #f0f0f0;
  }
`
