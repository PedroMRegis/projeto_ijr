import styled from "styled-components"
import { Link } from "react-router-dom"
import lojaImg from "@/assets/imgloja.png"




const Nossaloja = () => {
  return (
    <Wrapper>
      <Header>
        <Contato>
          <span>📱 Contate via WhatsApp: <strong>(11)99999-9999</strong></span>
          <span>📞 Televendas: <strong>(11)0000-0000</strong></span>
        </Contato>
        <Nav>
          <StyledLink to="#">Nossa loja</StyledLink>
          <StyledLink to="#">Atendimento</StyledLink>
        </Nav>
      </Header>

      <Main>
        <Titulo>NOSSA LOJA</Titulo>
        <Subtitulo>SÃO PAULO</Subtitulo>

        <Conteudo>
          <Imagem src={lojaImg} alt="Fachada da loja R. Amaral Office" />
          <BoxEndereco>
            <h3><AzulEscuro>R AMARAL OFFICE</AzulEscuro> - <strong>São Paulo</strong></h3>
            <p>R. Teodoro Sampaio - Pinheiros, São Paulo - SP, 04551-000</p>
            <br />
            <p><strong>Horário de atendimento:</strong></p>
            <p>Segunda a Sábado - 10h às 22h</p>
            <p>Domingo e Feriados - 10h às 18h</p>
          </BoxEndereco>
        </Conteudo>
      </Main>
    </Wrapper>
  )
}

export default Nossaloja

// ======================= Styled Components =======================

const Wrapper = styled.div`
  font-family: sans-serif;
  color: #000;
`

const Header = styled.header`
  background-color: #023e8a;
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.875rem;
`

const Contato = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 2rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const Main = styled.main`
  padding: 2rem;
  text-align: center;
`

const Titulo = styled.h1`
  font-size: 2rem;
  color: #023e8a;
`

const Subtitulo = styled.h2`
  font-size: 1.125rem;
  color: #333;
  margin-bottom: 2rem;
`

const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
`

const Imagem = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`

const BoxEndereco = styled.div`
  background-color: #f1f1f1;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: left;
  max-width: 400px;
  font-size: 0.95rem;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.25rem 0;
  }
`

const AzulEscuro = styled.span`
  color: #023e8a;
  font-weight: bold;
`
