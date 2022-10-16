import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../assets/Logo.png";
import './style/nav.css';
import './script/scrollBehaviour';

function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg" variant="white" className="fixed-top" id='navigasi'>
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-3 d-flex align-items-center"><img src={Logo} alt="logo" width="35px" className='me-3' />SANS IT</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="#action1" className="me-2 mb-lg-0 mb-2" active>Home</Nav.Link>
            <Nav.Link href="#action2" className="me-2 mb-lg-0 mb-2">About</Nav.Link>
            <Nav.Link href="#action3" className="me-2 mb-lg-0 mb-2">Service</Nav.Link>
            <Nav.Link href="#action4" className="me-2 mb-lg-0 mb-2">Gallery</Nav.Link>
            <Nav.Link href="#action5" className="me-3 mb-lg-0 mb-2">Portofolio</Nav.Link>
            <Nav.Link href="#action6" className="border border-primary bg-primary rounded-3 text-white px-4" data-bs="started">Get Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;