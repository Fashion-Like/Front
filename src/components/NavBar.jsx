import { logout } from "../stores/AccessTokenStore";
import styled from "styled-components";

const Nav = styled.div`
  width: 180px;
  height: auto; 
  background: white;
  z-index: 100;
  position: fixed;
  top:0;
  right: 0;
  padding-top: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  & span{
    padding: .7rem;
  }
  & a{
    display: block;
    padding: .7rem;
    cursor: pointer;

    &: hover {
     background: #e5e5e5;
    }
  }
`

const NavBar = () => {
  return (
    <nav>
      <Nav>
        <span>¡Bienvenido!</span>
        <a>Mi nombre</a>
        <a>Estadísticas</a>
        <a onClick={logout}>LogOut</a>
      </Nav>
    </nav>
  )
}

export default NavBar