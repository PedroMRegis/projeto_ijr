import React, { useState } from "react"
import styled from "styled-components"
import TopHeader from "@/components/TopHeader"
import MiddleHeader from "@/components/MiddleHeader"
import BottomHeader from "@/components/BottomHeader"
import Footer from "@/components/Footer"
import { FiltroProduto } from "@/utils/FiltroProduto"
import eletronicos from "@/data/eletronicos"
import CardProduto from "@/components/CardProduto"
import ModalDetalhesProduto from "@/components/ModalDetalhesProduto"
import { Produto } from "@/utils/FiltroProduto"

type EletronicosProps = {
  setBusca: (valor: string) => void
  termoBusca: string
}

const Eletronicos = ({ setBusca, termoBusca }: EletronicosProps) => {
  const { setFiltro, produtosFiltrados } = FiltroProduto(eletronicos);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

  return (
    <>
      <TopHeader />
      <MiddleHeader setBusca={setBusca} termoBusca={termoBusca} />
      <BottomHeader />

      <Section>
        <SectionTitulo>Eletrônicos</SectionTitulo>

        <Filtros>
          <button onClick={() => setFiltro("todos")}>Todos</button>
          <button onClick={() => setFiltro("monitores")}>Monitores</button>
          <button onClick={() => setFiltro("mouses")}>Mouses</button>
          <button onClick={() => setFiltro("essenciais escritorio")}>Essenciais Escritório</button>
          <button onClick={() => setFiltro("teclados")}>Teclados</button>
          <button onClick={() => setFiltro("desktop")}>Desktop</button>
        </Filtros>

        <AreaProdutos>
          <GridProdutos>
            {produtosFiltrados.map((produto, index) => (
              <CardProduto
                key={index}
                produto={produto}
                onDetalhes={(p) => setProdutoSelecionado(p)}
              />
            ))}
          </GridProdutos>
        </AreaProdutos>
      </Section>

      {produtoSelecionado && (
        <ModalDetalhesProduto
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}

      <Footer />
    </>
  )
}

export default Eletronicos

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`

const SectionTitulo = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
`

const Filtros = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.5);

  button {
    background: #023e8a;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s;

    flex: 1;
    min-width: 150px;
    max-width: 200px;
    text-align: center;

    &:hover {
      background: #002b5b;
    }
  }
`

const AreaProdutos = styled.div`
  flex: 1;
  width: 100%;
`

const GridProdutos = styled.div`
  display: grid;
  padding: 2rem 0;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    padding: 1rem 0;
  }
`