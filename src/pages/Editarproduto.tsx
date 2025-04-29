import styled from "styled-components";
import TopHeader from "@/components/TopHeader";
import MiddleHeaderFunc from "@/components/MiddleHeaderFunc";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import monitorImg from "@/assets/monitor_lg.png"; 

const EditarProduto = () => {
  return (
    <>
      <MiddleHeaderFunc />

      <Container>
        <Titulo>Editar Produto</Titulo>

        <Formulario>
          <Linha>
            <Input type="text" placeholder="Nome" />
          </Linha>
          <Linha>
            
            <Input type="number" placeholder="Insira o novo preço" />
          </Linha>
          <Linha>
            <TextArea placeholder="Atualizar descrição do produto" />
          </Linha>



          <Linha>
            <UploadLabel htmlFor="upload">Trocar Imagem</UploadLabel>
            <InputUpload id="upload" type="file" />
          </Linha>

          <BotaoSalvar>Salvar Alterações</BotaoSalvar>
        </Formulario>
      </Container>

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


