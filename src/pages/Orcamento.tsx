import styled from "styled-components"
import { Link } from "react-router-dom"
import imgBanner from "@/assets/imgprincipalorcamento.png"
import BottomHeader from "@/components/BottomHeader"
import MiddleHeader from "@/components/MiddleHeader"
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer"
import ambev from "@/assets/Ambev_logo.png"
import suzano from "@/assets/suzano.png"
import insper_jr from "@/assets/insper_jr_consulting_logo.jpg"
import cielo from "@/assets/Cielo.png"
import ifood from "@/assets/ifood.png"
import B3 from "@/assets/B3_logo.png"

type OrcamentoProps = {
  setBusca: (valor: string) => void;
  termoBusca: string;
}

const Contato = ({ setBusca, termoBusca }: OrcamentoProps) => {
  return (
    <>
      
    <TopHeader />
    <MiddleHeader setBusca={setBusca} termoBusca={termoBusca} />
    <BottomHeader />

    <Container>
      <Banner>
        <BannerImagem src={imgBanner} alt="Banner de Contato" />
        <BannerTexto>
          <h1>Estamos prontos para te ajudar</h1>
          <BotaoWhatsapp href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            Converse conosco via WhatsApp
          </BotaoWhatsapp>
        </BannerTexto>
      </Banner>
      
      <Intro>
        <Titulo>
          <strong>Compartilhe seu desafio</strong> e receba uma solução personalizada.
        </Titulo>
      </Intro>

      <Formulario>
        <Linha>
          <Input placeholder="Nome*" />
          <Input placeholder="Telefone*" />
        </Linha>
        <Linha>
          <Input placeholder="Email corporativo*" />
          <Input placeholder="Empresa*" />
        </Linha>
        <Linha>
          <Select>
            <option value="">Segmento*</option>
            <option value="TI">Tecnologia da Informação</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Logistica">Logística</option>
          </Select>
          <Select>
            <option value="">Departamento*</option>
            <option value="RH">Recursos Humanos</option>
            <option value="TI">TI</option>
            <option value="Marketing">Marketing</option>
          </Select>
        </Linha>
        <Linha>
          <Select>
            <option value="">Cargo*</option>
            <option value="Analista">Analista</option>
            <option value="Coordenador">Coordenador</option>
            <option value="Diretor">Diretor</option>
          </Select>
          <Select>
            <option value="">Qual o porte da empresa?*</option>
            <option value="pequena">Pequena</option>
            <option value="media">Média</option>
            <option value="grande">Grande</option>
          </Select>
        </Linha>
        <Linha>
          <Input placeholder="Como podemos ajudar?*" />
          <Select>
            <option value="">Solução de interesse*</option>
            <option value="cloud">Cloud & Data Center</option>
            <option value="seguranca">Segurança da Informação</option>
            <option value="automacao">Automação de Processos</option>
          </Select>
        </Linha>

        <Consentimento>
          <label>
            <input type="checkbox" /> Concordo em permitir que a empresa armazene e processe meus dados pessoais.
          </label>
        </Consentimento>

        <BotaoEnviar>Enviar</BotaoEnviar>
      </Formulario>

      <Credibilidade>
        <TituloCredibilidade>Com quem trabalhamos</TituloCredibilidade>
        <LogoContainer>
          <Logo src={ambev} alt="Logo Ambev" />
          <Logo src={suzano} alt="Logo Suzano" />
          <LogoEspecial src={insper_jr} alt="Logo Insper Jr." /> 
          <Logo src={cielo} alt="Logo Cielo" />
          <Logo src={ifood} alt="Logo iFood" />
          <Logo src={B3} alt="Logo B3" />
        </LogoContainer>
      </Credibilidade>

    </Container>

    <Footer />
    </>
  )
}

export default Contato;

const Container = styled.div`
  padding: 0;
  background-color: #f4f8fb;
`

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const BannerImagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BannerTexto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 45, 114, 0.6);
  color: white;
  text-align: center;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      padding: 0 1rem;
    }
  }
`

const Intro = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`

const Titulo = styled.h2`
  font-size: 2rem;
  color: #002d72;
  text-align: center;

  strong {
    color: #002d72;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Formulario = styled.form`
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Linha = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 45%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

const Select = styled.select`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 45%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

const Consentimento = styled.div`
  font-size: 0.85rem;
  color: #333;
  margin-top: 0.5rem;
`

const BotaoEnviar = styled.button`
  padding: 1rem;
  background-color: #002d72;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem auto 0;
    display: block;
  }
`

const BotaoWhatsapp = styled.a`
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  padding: 1rem 2rem;
  background-color: #25d366;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const Credibilidade = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
  text-align: center;
`

const TituloCredibilidade = styled.h2`
  font-size: 2rem;
  color: #002d72;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const Logo = styled.img`
  max-width: 150px;
  height: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

const LogoEspecial = styled.img`
  max-width: 200px; /* Aumentado em relação ao Logo normal */
  height: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

