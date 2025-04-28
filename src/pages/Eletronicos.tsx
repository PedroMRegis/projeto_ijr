import React, { useState } from 'react'
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
  setBusca: (valor: string) => void;
  termoBusca: string;
};

const Eletronicos = ({ setBusca, termoBusca }: EletronicosProps) => {
  const { setFiltro, produtosFiltrados } = FiltroProduto(eletronicos)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

  return (
    <>
      <TopHeader />
      <MiddleHeader setBusca={setBusca} termoBusca={termoBusca} />
      <BottomHeader />

      <Section>
        <Filtros>
          <button onClick={() => setFiltro("todos")}>Todos</button>
          <button onClick={() => setFiltro("monitores")}>Monitores</button>
          <button onClick={() => setFiltro("mouses")}>Mouses</button>
          <button onClick={() => setFiltro("essenciais escritorio")}>Essenciais Escritório</button>
          <button onClick={() => setFiltro("teclados")}>Teclados</button>
          <button onClick={() => setFiltro("desktop")}>Desktop</button>
        </Filtros>

        <AreaProdutos>
          <SectionTitulo>Eletrônicos</SectionTitulo>
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
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    max-width: 100%;
  }
`

const SectionTitulo = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 3rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.5);
  gap: 4rem;


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

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    button {
      flex: 1 1 45%;
      min-width: 120px;
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
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }
`