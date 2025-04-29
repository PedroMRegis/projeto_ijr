import styled from "styled-components";



export const footer = () => {
  return (
    <>
    <Footer>
      <FooterContent>
        <p>© 2025 R. Amaral Office. Todos os direitos reservados.</p>
        <FooterLinks>
          <p>Política de Privacidade</p>
          <p>Termos de Uso</p>
        </FooterLinks>
      </FooterContent>
    </Footer>
    </>
  )
}

export default footer

const Footer = styled.footer`
  background-color: #002d72;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

`;

