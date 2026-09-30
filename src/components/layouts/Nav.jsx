//import estilo from "./Nav.module.css"
import { Link } from "react-router-dom";
import { Container, Navbar, Nav as BNav  } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar  expand="lg"  data-bs-theme="dark" >
      <Container className="container">
        <Navbar.Brand as={Link} to="/" className="text-warning">
          Tienda de chocolates
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="hamburguesa" /> 
        <Navbar.Collapse id="hamburguesa" style={{ color: 'rgb(146, 139, 139);' }}>
          <BNav className="ms-auto  flex-column flex-lg-row gap-2 gap-lg-3 align-items-start align-items-lg-center" >
            <BNav.Link as={Link} to="/">
              Home
            </BNav.Link>
            <BNav.Link  as={Link} to="/productos">
              Productos
            </BNav.Link>
            <BNav.Link as={Link} to="/carrito">
              Carrito
            </BNav.Link>
          </BNav>
        </Navbar.Collapse>
        
      </Container>

    </Navbar>

  )
}

export default Nav;