import { Container, Row, Col, Ratio } from "react-bootstrap";

export default function DemoVideoSection() {
  return (
    <section id="demo" className="text-center text-white" style={{
      background: "linear-gradient(120deg, #0046FF 0%, #00D4B4 100%)"
    }}>
      <Container>
        <h2 className="fw-bold mb-3">Watch Challan∞ in Action</h2>
        <p className="text-light mb-5">
          See how easy it is to generate challans, verify OTPs, and deliver confidently.
        </p>
        <Row className="justify-content-center">
          <Col md={8}>
            <Ratio aspectRatio="16x9" className="rounded shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/gHPB5_17XE8?si=RItIFOmW9LRoNa8D"
                title="Challan Maker Demo"
                allowFullScreen
              />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
