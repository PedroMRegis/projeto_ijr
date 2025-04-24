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
import produtos from "@/data/produtos"
import { FiltroProduto } from "@/utils/FiltroProduto"



const Home = () => {
  const { filtro, setFiltro, produtosFiltrados } = FiltroProduto(produtos)
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
        <Filtros>
          <button onClick={() => setFiltro("todos")}>Todos</button>
          <button onClick={() => setFiltro("eletronicos")}>Eletrônicos</button>
          <button onClick={() => setFiltro("moveis")}>Móveis</button>
          <button onClick={() => setFiltro("suprimentos")}>Suprimentos</button>
        </Filtros>

        <AreaProdutos>
          <SectionTitulo>Favoritos em Eletrônicos</SectionTitulo>
          <GridProdutos>

            {produtosFiltrados.map((produto, index) => (
            <CardProduto
              key={index}
              imagem={produto.imagem}
              nome={produto.nome}
              precoDe={produto.precoDe}
              precoPor={produto.precoPor}
              tipo={produto.tipo}
            />
          ))}
          </GridProdutos>
        </AreaProdutos>
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
  display: flex;
  gap: 2rem;
  padding: 2rem;
`

const SectionTitulo = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  gap: 2rem;
  min-width: 10rem;
  max-height: 16rem;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 3rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.5); 

  button {
    background: #023e8a;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.875rem;

    &:hover {
      opacity: 0.9;
    }
  }
`

const AreaProdutos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

`


const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
`