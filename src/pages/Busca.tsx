import TopHeader from "@/components/TopHeader";
import MiddleHeader from "@/components/MiddleHeader";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import produtos from "@/data/produtos";
import CardProduto from "@/components/CardProduto";
import ModalDetalhesProduto from "@/components/ModalDetalhesProduto";
import { Produto } from "@/utils/FiltroProduto";
import styled from "styled-components";
import { useState } from "react";

type BuscaProps = {
  setBusca: (valor: string) => void;
  termoBusca: string;
};

const Busca = ({ setBusca, termoBusca }: BuscaProps) => {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
    produto.tipo.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <>
      <TopHeader />
      <MiddleHeader setBusca={setBusca} termoBusca={termoBusca} />
      <BottomHeader />

      <Container>
        <Titulo>Resultados da busca</Titulo>

        <GridProdutos>
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto, index) => (
              <CardProduto
                key={index}
                produto={produto}
                onDetalhes={(p) => setProdutoSelecionado(p)}
              />
            ))
          ) : (
            <MensagemNenhumProduto>Nenhum produto encontrado.</MensagemNenhumProduto>
          )}
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
  );
};

export default Busca;

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  min-height: 60vh;
`;

const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #023e8a;
`;

const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const MensagemNenhumProduto = styled.p`
  grid-column: 1/-1;
  font-size: 1rem;
  color: #555;
  `
