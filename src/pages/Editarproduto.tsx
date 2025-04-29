import styled from "styled-components";
import TopHeader from "@/components/TopHeader";
import MiddleHeader from "@/components/MiddleHeader";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import monitorImg from "@/assets/monitor_lg.png"; 

const EditarProduto = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeader setBusca={() => {}} termoBusca="" />
      <BottomHeader />

      <Container>
        <Titulo>Editar Produto</Titulo>

        <Formulario>
          <Linha>
            <Input type="text" placeholder="Monitor LG 22" />
          </Linha>
          <Linha>
            <Input type="number" placeholder="Preço atual: R$ 759,00" />
            <Input type="number" placeholder="Insira o novo preço" />
          </Linha>
          <Linha>
            <TextArea placeholder="Atual descrição do Produto: Monitor LG de 22 polegadas com resolução Full HD para imagens claras e detalhadas." />
          </Linha>

          <ImagemAtualContainer>
            <ImagemAtual src={monitorImg} alt="Imagem atual do produto" />
            <LegendaImagem>Imagem atual do produto</LegendaImagem>
          </ImagemAtualContainer>

          <Linha>
            <UploadLabel htmlFor="upload">Trocar Imagem</UploadLabel>
            <InputUpload id="upload" type="file" />
          </Linha>

          <BotaoSalvar>Salvar Alterações</BotaoSalvar>
        </Formulario>
      </Container>

      <Footer />
    </>
  );
};

export default EditarProduto;

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: #023e8a;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Linha = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  min-width: 45%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 150px;
`;

const UploadLabel = styled.label`
  background-color: #023e8a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;

const InputUpload = styled.input`
  display: none;
`;

const BotaoSalvar = styled.button`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 2rem auto 0;
    display: block;
  }
`;

const ImagemAtualContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ImagemAtual = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const LegendaImagem = styled.span`
  font-size: 0.9rem;
  color: #555;
`;
