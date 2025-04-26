import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { ShoppingCart, User, MagnifyingGlass } from "@phosphor-icons/react"
import { Input } from "@/components/ui/input"
import logo from "@/assets/logo_loja.jpg"
import { Link, useNavigate } from "react-router-dom"

const MiddleHeader = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const navigate = useNavigate()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuAberto(false)
      }
    }

    document.addEventListener("mousedown", handleClickFora)
    return () => {
      document.removeEventListener("mousedown", handleClickFora)
    }
  }, [])

  return (
    <Container>
      <Header>
        <LogoLoja>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </LogoLoja>

        <BarraPesquisa>
          <StyledInput type="text" placeholder="Buscar por" />
          <IconePesquisa>
            <MagnifyingGlass size={18} weight="regular" />
          </IconePesquisa>
        </BarraPesquisa>

        <Icones>
          <Link to="/carrinho">
            <button>
              <ShoppingCart size={32} weight="regular" />
            </button>
          </Link>

          <button 
            className={menuAberto ? "ativo" : ""} 
            onClick={() => setMenuAberto((prev) => !prev)}
          >
            <User size={32} weight="regular" />
          </button>
        </Icones>
      </Header>

      {menuAberto && (
        <ContainerMenu ref={menuRef}>
          <TituloMenu>Como deseja acessar?</TituloMenu>

          <BotaoMenu
            onClick={() => {
              setMenuAberto(false)
              navigate("/login")
            }}
          >
            Login como Usuário
          </BotaoMenu>

          <BotaoMenu
            onClick={() => {
              setMenuAberto(false)
              navigate("/login-funcionario")
            }}
          >
            Login como Funcionário
          </BotaoMenu>
        </ContainerMenu>
      )}
    </Container>
  )
}

export default MiddleHeader



const Container = styled.div`
  position: relative;
`

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
  cursor: pointer;
  border: 2px solid transparent;
  padding-right: 0rem;
  transition: border-color 0.2s ease-in-out;
  
  &:hover {
    border-color: black;
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
  position: relative;

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

    &.ativo {
      background-color: #023e8a;
      color: white;
    }
  }
`

const ContainerMenu = styled.div`
  position: absolute;
  top: 5rem;
  right: 2rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 100;
  width: 220px;
  gap: 1rem;
`

const TituloMenu = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #023e8a;
`

const BotaoMenu = styled.button`
  background-color: #023e8a;
  color: white;
  padding: 0.6rem;
  margin-top: 0.25rem;
  border: none;
  border-radius: 0.4rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #012f6b;
  }
`