import styled from "styled-components"
import { Link } from "react-router-dom"
import lojaImg from "@/assets/imgloja.png"
import BottomHeader from "@/components/BottomHeader";
import MiddleHeader from "@/components/MiddleHeader";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";


type NossaLojaProps = {
  setBusca: (valor: string) => void;
  termoBusca: string;
};

const Nossaloja = ({ setBusca, termoBusca }: NossaLojaProps) => {
  return (
    <>
      <TopHeader />
      <MiddleHeader setBusca={setBusca} termoBusca={termoBusca} />
      <BottomHeader />
    <Wrapper>
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
    <Footer />
    </>
  )
}

export default Nossaloja

const Wrapper = styled.div`
  font-family: 'Poppins', sans-serif; /* Fonte moderna e bonita */
  color: #000;
  display: flex;
  justify-content: center;
  padding: 2rem;
`

const Main = styled.main`
  text-align: center;
  width: 100%;
  max-width: 1200px;
`

const Titulo = styled.h1`
  font-size: 2rem;
  color: #023e8a;
  margin-bottom: 0.5rem;
`

const Subtitulo = styled.h2`
  font-size: 1.125rem;
  color: #333;
  margin-bottom: 2rem;
`

const Conteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`

const Imagem = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`

const BoxEndereco = styled.div`
  background-color: #f1f1f1;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center; /* Centraliza o conteúdo dentro da caixa */
  max-width: 400px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5; /* Deixa a leitura mais confortável */

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
`

const AzulEscuro = styled.span`
  color: #023e8a;
  font-weight: bold;
`
