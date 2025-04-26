import styled from "styled-components"
import banner from "@/assets/banner.png"
import BannerEletronicos from '@/assets/banner_eletronicos.png'
import BannerMoveis from '@/assets/banner_moveis.png'
import BannerSuprimentos from '@/assets/banner_suprimentos.png'




const Home = () => {
  
  return (
    <>
      <Container>
        <Conteudo>
          <Titulo>30% OFF</Titulo>
          <Texto>Itens e kits para transformar<br />seu espaço de trabalho!</Texto>
          <Subtexto>ou realize seu orçamento diretamente com a gente!</Subtexto>
          <Botao href="/orcamento">ENTRE EM CONTATO</Botao>
        </Conteudo>
      </Container>

      <Section>
      <Head>
        <Texto>Explore nossos produtos</Texto>
        <Subtexto>Encontre o design certo para permitir que seus funcionários façam o melhor.</Subtexto>
      </Head>
      <BannerRow>
        <BannerCard href="/moveis">
          <Image src={BannerMoveis} alt="Móveis" />
          <Label>Móveis</Label>
        </BannerCard>
        <BannerCard href="/eletronicos">
          <Label>Eletrônicos</Label>
          <Image src={BannerEletronicos} alt="Eletrônicos" />
        </BannerCard>
        <BannerCard href="/suprimentos">
          <Image src={BannerSuprimentos} alt="Suprimentos" />
          <Label>Suprimentos</Label>
        </BannerCard>
      </BannerRow>
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
const Section = styled.main`
  padding: 2rem;
  background: #f7f7f7;
`

const Head = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const BannerRow = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`

const BannerCard = styled.a`
  position: relative;
  display: block;
  max-width: 300px;
  width: 100%;
  height: 26rem;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Label = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #023e8a ;
  font-size: 1.25rem;
  font-weight: bold;
`

