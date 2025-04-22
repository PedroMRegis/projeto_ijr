import styled from "styled-components"
import { ShoppingCart, User, MagnifyingGlass } from "@phosphor-icons/react"
import { Input } from "@/components/ui/input"
import logo from "@/assets/logo_loja.jpg"
import { Link } from "react-router-dom"


const MiddleHeader = () => {
  return (

    <Header>
        <LogoLoja>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </LogoLoja>

        <BarraPesquisa>
            <StyledInput type="text" placeholder="Buscar por"></StyledInput>
            <IconePesquisa>
                <MagnifyingGlass size={18} weight="regular" />
            </IconePesquisa>
        </BarraPesquisa>

        <Icones>
          <a href="/carrinho">
            <button>
              <ShoppingCart size={32} weight="regular" />
            </button>
          </a>
          <a href="/login">
            <button>
              <User size={32} weight="regular" />
            </button>
          </a>
        </Icones>
    </Header>

    
    )
}


export default MiddleHeader

const Header = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  flex-wrap: wrap;
`

const LogoLoja = styled.button`
  background: none;
  border: none;
  img {
    height: 3rem;
  }
`

const BarraPesquisa = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
`

const StyledInput = styled(Input)`
  width: 100%;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  border-radius: 9999px;
  background-color: #f2f2f2;
  cursos: pointer;
  border: 2px solid transparent;
  padding-right: 0rem;
  transition: border-color 0.2s ease-in-out;
  
  &:hover {
    border-color:black;
  }
`

const IconePesquisa = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: #555;
  background: none;
  border: none;
`

const Icones = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 9999px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #023e8a;
      color: white;
    }
  }
`