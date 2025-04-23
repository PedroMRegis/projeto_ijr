import styled from "styled-components"
import { Link } from "react-router-dom"
import CardProduto from "@/components/CardProduto"
import imgKit1 from "@/assets/Kit1.png"
import imgKit2 from "@/assets/Kit2.png"
import imgKit3 from "@/assets/Kit3.png"
import imgformaspagamento from "@/assets/pagamento.png"
import comprasegura from "@/assets/comprasegura.png"
import imgorcamento from "@/assets/imgprincipalorcamento.png"

const Orcamento = () => {
  return (
    <Container>
      <Banner>
        <Conteudo>
          <TituloBanner>Solicite seu orçamento agora</TituloBanner>
          <TextoBanner>Equipe especializada pronta pra atender você!</TextoBanner>
          <Telefone><strong>(11) 99999-9999</strong></Telefone>
          <BotaoWhatsapp href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            Converse conosco via WhatsApp
          </BotaoWhatsapp>
        </Conteudo>
      </Banner>

      <Titulo>Conheça nossos kits e personalize do seu jeito:</Titulo>

      <GridCards>
        <CardProduto
          imagem={imgKit1}
          nome="Kit escritório Inicial"
          precoDe="2.819,00"
          precoPor="2.033,10"
        />
        <CardProduto
          imagem={imgKit2}
          nome="Kit escritório Pro"
          precoDe="4.783,00"
          precoPor="3.587,85"
        />
        <CardProduto
          imagem={imgKit3}
          nome="Kit diretoria"
          precoDe="5.900,00"
          precoPor="3.983,70"
        />
      </GridCards>

      <Rodape>
        <Contato>
          <p>Contato via WhatsApp: (11) 99999-9999</p>
          <p>Televendas: (11) 0000-0000</p>
          <p>Email: ramaraloffice@gmail.com</p>
        </Contato>
        <Pagamentos>
          <img src={imgformaspagamento} alt="Formas de pagamento" />
        </Pagamentos>
        <Endereco>
          R. Teodoro Sampaio - Pinheiros, São Paulo - SP, 04551-000
        </Endereco>
      </Rodape>
    </Container>
  )
}

export default Orcamento

// ======================= Styled Components =======================

const Container = styled.div`
  width: 100%;
`

const Banner = styled.section`
  background-image: url(${imgorcamento});
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

const TituloBanner = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`

const TextoBanner = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
`

const Telefone = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;

  strong {
    font-size: 1.5rem;
  }
`

const BotaoWhatsapp = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
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

const Titulo = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  margin: 2rem 0 1rem;
`

const GridCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`

const Rodape = styled.footer`
  margin-top: 3rem;
  background-color: #023e8a;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`

const Contato = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

const Pagamentos = styled.div`
  img {
    max-width: 300px;
    margin: 0 auto;
  }
`

const Endereco = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
`
