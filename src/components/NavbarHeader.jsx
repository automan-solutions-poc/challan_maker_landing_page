import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHeader({ onBookDemo }) {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm border-bottom py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-primary fs-4">
          Challan<span style={{ color: "#00D4B4" }}>∞</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#features">Features</Nav.Link>
            <Link onClick={onBookDemo} className="nav-link">
              Book Demo
            </Link>
            <Button
              href="https://portal.challanmaker.com"
              className="ms-3"
              style={{ backgroundColor: "#0046FF", border: "none" }}
            >
              Tenant Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
