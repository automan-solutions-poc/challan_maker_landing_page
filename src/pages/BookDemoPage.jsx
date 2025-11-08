import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import DemoForm from "../components/DemoForm";

export default function BookDemoPage() {
  return (
    <>
      <NavbarHeader />
      <Container className="py-5">
        <h2 className="fw-bold mb-3">Book a Demo</h2>
        <p className="text-muted mb-4">
          Fill out the form and our team will contact you to schedule a personalized demo.
        </p>
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <DemoForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}
