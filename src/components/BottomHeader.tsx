import styled from "styled-components"
import { Link } from "react-router-dom"

const BottomHeader = () => {
  return (
    <BarraNavegador>
      <Item to="/orcamento">Orçamento</Item>
      <Item to="/suprimentos">Suprimentos</Item>
      <Item to="/moveis">Móveis</Item>
      <Item to="/eletronicos">Eletrônicos</Item>
    </BarraNavegador>
  )
}

export default BottomHeader

const BarraNavegador = styled.nav`
  display: flex;
  justify-content:space-evenly;
  background-color: #023e8a;
  padding: 0.75rem;
  gap: 3rem;
  `

  const Item = styled(Link)`
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`