import React, { useState } from 'react'
import styled from "styled-components"
import { FiltroProduto } from "@/utils/FiltroProduto"
import CardProduto from "@/components/CardProduto"
import suprimentos from "@/data/suprimentos"
import ModalDetalhesProduto from "@/components/ModalDetalhesProduto"
import { Produto } from "@/utils/FiltroProduto"
import TopHeader from '@/components/TopHeader'
import BottomHeader from '@/components/BottomHeader'
import MiddleHeader from '@/components/MiddleHeader'
import Footer from '@/components/Footer'

type SuprimentosProps = {
  setBusca: (valor: string) => void;
  termoBusca: string;
};

const Suprimentos = ({ setBusca, termoBusca }: SuprimentosProps) => {
  const { setFiltro, produtosFiltrados } = FiltroProduto(suprimentos)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

  return (
    <>
      <TopHeader />
      <MiddleHeader setBusca={setBusca} termoBusca={termoBusca} />
      <BottomHeader />

      <Container>
        <SectionTitulo>Suprimentos</SectionTitulo>
        <Filtros>
          <button onClick={() => setFiltro("todos")}>Todos</button>
          <button onClick={() => setFiltro("papel e blocos")}>Papel e blocos</button>
          <button onClick={() => setFiltro("materiais de mesa")}>Materiais de mesa</button>
          <button onClick={() => setFiltro("outros")}>Outros</button>
        </Filtros>

        <GridProdutos>
          {produtosFiltrados.map((produto, index) => (
            <CardProduto
              key={index}
              produto={produto}
              onDetalhes={(p) => setProdutoSelecionado(p)}
            />
          ))}
        </GridProdutos>
      </Container>

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

export default Suprimentos


const Container = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
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
  width: 100%;

  button {
    background: #023e8a;
    color: white;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    flex: 1;
    min-width: 150px;
    max-width: 200px;
    text-align: center;

    &:hover {
      background: #002b5b;
    }
  }
`

const GridProdutos = styled.div`
  display: grid;
  width: 100%;
  padding: 2rem 0;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    padding: 1rem 0;
  }
`