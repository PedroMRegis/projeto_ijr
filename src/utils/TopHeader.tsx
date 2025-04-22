import styled from "styled-components"
import { WhatsappLogo, Phone } from "@phosphor-icons/react"

const TopHeader = () => {
  return (
    <Header>
        <LeftSection>
          <InfoItem>
            <WhatsappLogo size={24} weight="regular" color="white" />
            <Contato>
              <p>
                Contate via WhatsApp: <br />
                (11) 99999-9999 
              </p>
            </Contato>
          </InfoItem>

          <Divisor />

          <InfoItem>
            <Phone size={24} weight="regular" color="white" />
            <Contato>
              <p>
                Televendas: <br />
                (11) 0000-0000
              </p>
            </Contato>
          </InfoItem>
        </LeftSection>

        <RightSection>
          <LinkItem href="nossa-loja">Nossa loja</LinkItem>
          <LinkItem href="atendimento">Atendimento</LinkItem>
        </RightSection>
    </Header>
  )
}

export default TopHeader

const Header = styled.header`
  width: 100%;
  padding: 0.25rem 1rem;
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
`

const Contato = styled.div`
  display: flex;
  font-size: 0.75rem;
`

const Divisor = styled.div`
  height: 2rem;
  width: 2px;
  background-color: white;
`

const LinkItem = styled.a`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
