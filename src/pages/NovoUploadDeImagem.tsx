import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Plus } from "@phosphor-icons/react";
import MiddleHeaderFunc from "@/components/MiddleHeaderFunc";

const UploadImagem = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MiddleHeaderFunc />

      <Content>
        <Titulo>Upload de Nova Imagem</Titulo>

        <FormUpload>
          <InputFile type="file" id="file" />
          <BotaoUpload>
            <Plus size={24} />
            Escolher Imagem
          </BotaoUpload>

          <BotaoConfirmar onClick={() => navigate("/")}>
            Confirmar Upload
          </BotaoConfirmar>
        </FormUpload>
      </Content>
    </Container>
  );
};

export default UploadImagem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 30px;
`;

const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #023e8a;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const FormUpload = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

const InputFile = styled.input`
  display: none;
`;

const BotaoUpload = styled.label.attrs({ htmlFor: "file" })`
  background-color: #28a745;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const BotaoConfirmar = styled.button`
  background-color: #023e8a;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #012f6b;
  }
`;
