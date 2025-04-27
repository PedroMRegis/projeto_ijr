import styled from "styled-components"
import { Link } from "react-router-dom"
import TopHeader from "@/components/TopHeader"
import MiddleHeaderLogin from "@/components/MiddleHeaderLogin"
import Footer from "@/components/Footer"

const Login = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeaderLogin />
      <Container>
        <FormContainer>
          <Titulo>Acesse sua conta</Titulo>

          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" placeholder="Email*" />

          <Label htmlFor="senha">Senha</Label>
          <Input type="password" id="senha" placeholder="Senha*" />

          <BotaoEntrar>ENTRAR</BotaoEntrar>

          <Separador>
            <Linha />
            <span>Não tem uma conta?</span>
            <Linha />
          </Separador>

          <LinkCriarConta to="/criar-conta">CRIAR CONTA</LinkCriarConta>
        </FormContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Login

const Container = styled.section`
  background-color: #f4f4f4;
  min-height: calc(100vh - 150px); 
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const FormContainer = styled.form`
  background-color: #fff;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 550px; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Titulo = styled.h2`
  text-align: center;
  color: #023e8a;
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 0.95rem;
`

const BotaoEntrar = styled.button`
  margin-top: 1rem;
  background-color: #023e8a;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
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
  height: 1px;
  background-color: #ccc;
  border: none;
`

const LinkCriarConta = styled(Link)`
  text-align: center;
  border: 1px solid #023e8a;
  padding: 0.75rem;
  color: #023e8a;
  text-decoration: none;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`