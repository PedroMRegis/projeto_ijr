import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "@/assets/logo_loja.jpg";

const MiddleHeader = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <LogoLoja onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </LogoLoja>
      </Header>
    </Container>
  );
};

export default MiddleHeader;

const Container = styled.div`
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  background: white;
`;

const LogoLoja = styled.button`
  background: none;
  border: none;
  
  img {
    height: 3rem;
  }
`;
