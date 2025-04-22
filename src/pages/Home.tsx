import styled from "styled-components"
import banner from "@/assets/banner.png"

const Home = () => {
  return (
    <Container>
      <Conteudo>
        <Titulo>30% OFF</Titulo>
        <Texto>Itens e kits para transformar<br />seu espaço de trabalho!</Texto>
        <Subtexto>ou realize seu orçamento diretamente com a gente!</Subtexto>
        <Botao href="/orcamento">ENTRE EM CONTATO</Botao>
      </Conteudo>
    </Container>
  )
}

export default Home

const Container = styled.section`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  text-align: center;
  padding: 2rem;
`

const Conteudo = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 0.5rem;
`

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`

const Texto = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
`

const Subtexto = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`

const Botao = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: white;
    color: #023e8a;
  }
`
