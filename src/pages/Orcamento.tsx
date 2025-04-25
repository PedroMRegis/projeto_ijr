import styled from "styled-components";
import { Link } from "react-router-dom";
import imgBanner from "@/assets/imgprincipalorcamento.png"; // imagem do banner fixo da home/orçamento

const Contato = () => {
  return (
    <Container>
      <Banner>
        <BannerImagem src={imgBanner} alt="Banner de Contato" />
        <BannerTexto>
          <h1>Estamos prontos para te ajudar</h1>
          <BotaoWhatsapp href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            Converse conosco via WhatsApp
          </BotaoWhatsapp>
        </BannerTexto>
      </Banner>

      <Intro>
        <Titulo>
          <strong>Compartilhe seu desafio</strong> e receba uma solução personalizada.
        </Titulo>
      </Intro>

      <Formulario>
        <Linha> 
          <Input placeholder="Nome*" />
          <Input placeholder="Telefone*" />
        </Linha>
        <Linha>
          <Input placeholder="Email corporativo*" />
          <Input placeholder="Empresa*" />
        </Linha>
        <Linha>
          <Select>
            <option value="">Segmento*</option>
            <option value="TI">Tecnologia da Informação</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Logistica">Logística</option>
          </Select>
          <Select>
            <option value="">Departamento*</option>
            <option value="RH">Recursos Humanos</option>
            <option value="TI">TI</option>
            <option value="Marketing">Marketing</option>
          </Select>
        </Linha>
        <Linha>
          <Select>
            <option value="">Cargo*</option>
            <option value="Analista">Analista</option>
            <option value="Coordenador">Coordenador</option>
            <option value="Diretor">Diretor</option>
          </Select>
          <Select>
            <option value="">Qual o porte da empresa?*</option>
            <option value="pequena">Pequena</option>
            <option value="media">Média</option>
            <option value="grande">Grande</option>
          </Select>
        </Linha>
        <Linha>
          <Input placeholder="Como podemos ajudar?*" />
          <Select>
            <option value="">Solução de interesse*</option>
            <option value="cloud">Cloud & Data Center</option>
            <option value="seguranca">Segurança da Informação</option>
            <option value="automacao">Automação de Processos</option>
          </Select>
        </Linha>

        <Consentimento>
          <label>
            <input type="checkbox" /> Concordo em permitir que a empresa armazene e processe meus dados pessoais.
          </label>
        </Consentimento>

        <BotaoEnviar>Enviar</BotaoEnviar>
      </Formulario>
    </Container>
  );
};

export default Contato;

// Estilos
const Container = styled.div`
  padding: 0;
  background-color: #f4f8fb;
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
`;

const BannerImagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerTexto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 45, 114, 0.6);
  color: white;
  text-align: center;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

const Intro = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Titulo = styled.h2`
  font-size: 2rem;
  color: #002d72;
  strong {
    color: #002d72;
  }
`;

const Formulario = styled.form`
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Linha = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Consentimento = styled.div`
  font-size: 0.85rem;
  color: #333;
  margin-top: 0.5rem;
`;

const BotaoEnviar = styled.button`
  padding: 1rem;
  background-color: #002d72;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BotaoWhatsapp = styled.a`
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  padding: 1rem 2rem;
  background-color: #25d366;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
`;