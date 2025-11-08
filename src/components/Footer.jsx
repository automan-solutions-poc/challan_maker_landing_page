import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <h5>
          Challan<span style={{ color: "#00D4B4" }}>∞</span>
        </h5>
        <p className="mb-0 small">
          Developed by <span style={{ color: "#00D4B4" }}>Automan Solutions Pvt. Ltd.</span>
        </p>
        <p className="text-muted small mt-1">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}
