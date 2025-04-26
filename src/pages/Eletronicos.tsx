import React from 'react'
import styled from "styled-components"
import { FiltroProduto } from "@/utils/FiltroProduto"
import eletronicos from "@/data/eletronicos"
import CardProduto from "@/components/CardProduto"

const Eletronicos = () => {
  const { setFiltro, produtosFiltrados } = FiltroProduto(eletronicos)
  return (
    <Section>
        <Filtros>
          <button onClick={() => setFiltro("todos")}>Todos</button>
          <button onClick={() => setFiltro("monitores")}>Monitores</button>
          <button onClick={() => setFiltro("mouses")}>Mouses</button>
          <button onClick={() => setFiltro("essenciais escritorio")}>Essenciais Escritorio</button>
          <button onClick={() => setFiltro("teclados")}>Teclados</button>
          <button onClick={() => setFiltro("desktop")}>Desktop</button>
        </Filtros>

        <AreaProdutos>
          <SectionTitulo>Eletrônicos</SectionTitulo>
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
  )
}

export default Eletronicos

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
  gap: 4rem;
  max-height: 35rem;
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
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
`