import styled from "styled-components"

const BottomHeader = () => {
  return (
    <BarraNavegador>
      <Item href="/orcamento">Orçamento</Item>
      <Item href="/suprimentos">Suprimentos</Item>
      <Item href="/moveis">Móveis</Item>
      <Item href="/eletronicos">Eletrônicos</Item>
    </BarraNavegador>
  )
}

export default BottomHeader

const BarraNavegador = styled.nav`
  display: flex;
  font-family: Arial, sans-serif;
  justify-content:space-evenly;
  background-color: #023e8a;
  padding: 0.75rem;
  gap: 3rem;
  `

  const Item = styled.a`
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`