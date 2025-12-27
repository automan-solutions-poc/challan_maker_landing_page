import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹499 / month",
    features: [
      "Up to 100 challans/month",
      "1 Tenant account",
      "Basic PDF customization",
      "Email notifications",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹999 / month",
    features: [
      "Unlimited challans",
      "5 Tenant users",
      "Branded PDFs & QR codes",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₹1999 / month",
    features: [
      "Unlimited users",
      "Branded PDFs & QR codes",
      "Custom SMTP & branding",
      "Branded PDFs & QR codes",
      "Dedicated support",
    ],
    highlight: false,
  },
];

export default function PricingSection({ onBookDemo }) 
 {
  return (
    <section id="pricing" style={{ background: "#f9fbff" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold">Flexible Plans for Every Business</h2>
          <p className="text-muted">
            Whether you're a small repair shop or a growing service center,
            Challan∞ scales with you.
          </p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {plans.map((plan, i) => (
            <Col md={4} key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`border-0 shadow-sm p-4 h-100 text-center ${
                    plan.highlight ? "bg-white premium-plan" : "bg-light"
                  }`}
                  style={{
                    borderRadius: "20px",
                    transform: plan.highlight ? "scale(1.05)" : "",
                    boxShadow: plan.highlight
                      ? "0 10px 40px rgba(0,70,255,0.2)"
                      : "0 5px 15px rgba(0,0,0,0.05)",
                  }}
                >
                  <Card.Body>
                    <h5 className="fw-bold mb-3">{plan.name}</h5>
                    <h3
                      className={`fw-bold ${
                        plan.highlight ? "text-primary" : "text-dark"
                      }`}
                    >
                      {plan.price}
                    </h3>
                    <ul className="list-unstyled mt-4 mb-4 text-muted">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          ✅ {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.highlight ? "primary" : "outline-primary"}
                      className="px-5 py-2"
                      style={{
                        borderRadius: "8px",
                        background: plan.highlight
                          ? "linear-gradient(90deg,#0046FF,#00D4B4)"
                          : "none",
                        borderColor: "#0046FF",
                      }}
                      onClick={onBookDemo}
                    >
                      {plan.highlight ? "Start Free Demo" : "Book Demo"}
                    </Button>
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
