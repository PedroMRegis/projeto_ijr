import styled from "styled-components"
import { WhatsappLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const TopHeader = () => {
  return (
    <Header>
      <LeftSection>
        <InfoItem as="a" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
          <WhatsappLogo size={24} weight="regular" color="white" />
          <Contato>
            <Texto>
              Contate via WhatsApp: <br />
              (11) 99999-9999
            </Texto>
          </Contato>
        </InfoItem>
      </LeftSection>

      <RightSection>
        <LinkItem to="/nossa-loja">Nossa loja</LinkItem>
      </RightSection>
    </Header>
  )
}

export default TopHeader

const Header = styled.header`
  width: 100%;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #023e8a;
  color: white;
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const RightSection = styled.div`
  display: flex;
  gap: 2rem;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
`

const Contato = styled.div`
  display: flex;
  font-size: 0.75rem;
`

const LinkItem = styled(Link)`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

const Texto = styled.p`
  color: white;
  margin: 0;
  font-size: 0.75rem;
`
