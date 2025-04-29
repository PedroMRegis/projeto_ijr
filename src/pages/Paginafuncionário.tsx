import React from "react";
import styled from "styled-components";
import { Plus, PencilSimple } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import MiddleHeaderFunc from "@/components/MiddleHeaderFunc";

const eletronicos = [
  "Monitor LG 22”",
  "Mouse HP USB",
  "Telefone Ip YeaLink T30",
  "Teclado Logitech USB",
  "Impressora HP Laser",
  "Computador Desktop"
];

const moveis = [
  "Cadeira de escritório diretor giratória",
  "Cadeira de escritório presidente giratória",
  "Mesa office com gavetas",
  "Mesa de escritório pé preto",
  "Estante alta 2 portas preta",
  "Armário preto 2 portas"
];

const suprimentos = [
  "Bloco de anotações 7x10",
  "Papel Sulfite A4 75g Chamex",
  "Kit Office Essencial",
  "Grampeador",
  "Organizador Escritório",
  "Organizador bandeja dupla"
];

const Pagina = () => {
  return (
    <Container>
      <MiddleHeaderFunc />
      <Content>
        <TopSectionTitle>Editar Banner da Página Principal</TopSectionTitle>

        <FormSection>
          <Input type="text" placeholder="Inserir título da promoção" />
          <Textarea placeholder="Inserir descrição da promoção" />
          <UploadButton href="/upload-imagem">
            <Plus size={32} /> Novo upload de imagem
          </UploadButton>
        </FormSection>

        <BotaoEditar href = "/editar-produto">
          <Section title="Editar Eletrônicos" items={eletronicos} />
          <Section title="Editar Móveis" items={moveis} />
          <Section title="Editar Suprimentos" items={suprimentos} />
        </BotaoEditar>

        <EditInfo>
          Clique no ícone de lápis para editar as informações
        </EditInfo>
      </Content>
    </Container>
  );
};

export default Pagina;

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    <ProductList>
      {items.map((item) => (
        <ProductItem key={item}>
          {item} <PencilSimple size={20} />
        </ProductItem>
      ))}
    </ProductList>
  </>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 30px;

  @media (max-width: 600px) {
    padding: 20px 10px;
    gap: 20px;
  }
`;
const BotaoEditar = styled.a`
`

const TopSectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #023e8a;
  margin-bottom: -10px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  height: 100px;
  resize: vertical;
`;

const UploadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  font-size: 18px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  color: #023e8a;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const ProductList = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const ProductItem = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
`;

const EditInfo = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
