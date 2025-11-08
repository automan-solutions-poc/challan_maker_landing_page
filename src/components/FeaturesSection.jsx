import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const features = [
  { title: "Branded PDF Challans", text: "Generate beautiful, branded challans with logos and themes." },
  { title: "OTP Verification", text: "Deliver devices securely with built-in OTP verification." },
  { title: "Email Notifications", text: "Send automatic challan updates and delivery confirmations." },
  { title: "Tenant Isolation", text: "Your data stays private — multi-tenant architecture ensures separation." },
  { title: "Admin Dashboard", text: "Monitor tenants, users, and subscriptions effortlessly." },
  { title: "QR Code Integration", text: "Quick access to challan details via unique QR codes." },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ background: "#fff" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Everything You Need to Run Your Store</h2>
        <Row className="g-4">
          {features.map((f, i) => (
            <Col md={4} key={i}>
              <motion.div whileHover={{ y: -5 }} className="h-100 fade-in">
                <Card className="border-0 h-100 p-3">
                  <Card.Body>
                    <div className="rounded-circle bg-light mb-3" style={{ width: 50, height: 50, margin: "0 auto" }} />
                    <Card.Title className="text-center text-primary">{f.title}</Card.Title>
                    <Card.Text className="text-center text-muted">{f.text}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
