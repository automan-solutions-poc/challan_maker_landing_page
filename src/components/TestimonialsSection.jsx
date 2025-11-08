import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const testimonials = [
  { name: "TechFix Computers", role: "Owner, Pune", text: "Challan∞ transformed our repair flow — PDF challans and OTP made us look professional overnight!" },
  { name: "DigitalCare Services", role: "Manager, Bengaluru", text: "Automation done right. Our customers trust us more thanks to OTP verification." },
  { name: "SmartTech Repairs", role: "CEO, Mumbai", text: "Smooth, reliable, and fast. It’s like having a digital front desk assistant." },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background: "#f8faff" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Loved by Service Centers Across India</h2>
        <Row>
          {testimonials.map((t, i) => (
            <Col md={4} key={i}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card className="border-0 shadow-sm mb-4 p-4 h-100 text-center">
                  <Card.Text className="fst-italic text-muted">“{t.text}”</Card.Text>
                  <div className="mt-3">
                    <h6 className="fw-bold text-primary">{t.name}</h6>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
