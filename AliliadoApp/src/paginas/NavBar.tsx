import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HOME, PROGRAMAS_AWIN, PROGRAMAS_SHOPEE, PROMOCOES_E_CUPONS_AWIN, PROMOCOES_E_CUPONS_SHOPEE } from "../util/rotas";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to={HOME}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={HOME}>Home</Nav.Link>
            <Nav.Link as={Link} to={PROGRAMAS_AWIN}>Programas Awin</Nav.Link>
            <Nav.Link as={Link} to={PROGRAMAS_SHOPEE}>Programas Shopee</Nav.Link>
            <Nav.Link as={Link} to={PROMOCOES_E_CUPONS_AWIN}>Promoções Awin</Nav.Link>
            <Nav.Link as={Link} to={PROMOCOES_E_CUPONS_SHOPEE}>Promoções Shopee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;