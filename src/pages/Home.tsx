import styled from "styled-components"
import banner from "@/assets/banner.png"
import { Link } from "react-router-dom"
import CardProduto from "@/components/CardProduto"
import mouse from "@/assets/mouse.png"
import telefone from "@/assets/telefone_fixo.png"
import monitor from "@/assets/monitor_lg.png"
import teclado from "@/assets/teclado.png"
import impressora from "@/assets/impressora_laser.png"
import desktop from "@/assets/Desktop.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"



const Home = () => {
  return (
    <>
      <Container>
        <Conteudo>
          <Titulo>30% OFF</Titulo>
          <Texto>Itens e kits para transformar<br />seu espaço de trabalho!</Texto>
          <Subtexto>ou realize seu orçamento diretamente com a gente!</Subtexto>
          <Botao to="/orcamento">ENTRE EM CONTATO</Botao>
        </Conteudo>
      </Container>

      <Section>
        <SectionTitulo>Favoritos em Eletrônicos</SectionTitulo>
        <Carousel>
          <CarouselContent style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
          <CarouselItem><CardProduto imagem={mouse} nome="Mouse HP USB" precoDe="89,00" precoPor="36,99" /></CarouselItem>
            <CarouselItem><CardProduto imagem={telefone} nome="Telefone IP Yealink T30" precoDe="299,00" precoPor="253,90" /></CarouselItem>
            <CarouselItem><CardProduto imagem={monitor} nome="Monitor LG 22\" precoDe="899,00" precoPor="759,00" /></CarouselItem>
            <CarouselItem><CardProduto imagem={teclado} nome="Teclado Logitech USB" precoDe="129,00" precoPor="89,90" /></CarouselItem>
            <CarouselItem><CardProduto imagem={impressora} nome="Impressora HP Laser" precoDe="999,00" precoPor="830,00" /></CarouselItem>
            <CarouselItem><CardProduto imagem={desktop} nome="Computador Desktop" precoDe="899,00" precoPor="799,00" /></CarouselItem>
          </CarouselContent>
        </Carousel>
      </Section>


    </>
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

const Botao = styled(Link)`
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
const Section = styled.section`
  padding: 2rem;
`

const SectionTitulo = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
