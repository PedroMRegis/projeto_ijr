import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { XCircle } from '@phosphor-icons/react';


const MiddleHeaderLogin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <LogoLoja onClick={() => navigate("/")}>
        <XCircle size={48} weight="regular" />
        </LogoLoja>
      </Header>
    </Container>
  );
};

export default MiddleHeaderLogin;

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
