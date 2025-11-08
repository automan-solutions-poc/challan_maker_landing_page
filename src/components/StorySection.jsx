import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" style={{ backgroundColor: "#f9fbff" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-3">Our Story</h2>
              <p className="text-muted lead">
                It all started with one small repair store — stacks of paper challans,
                messy notebooks, and constant confusion about who picked up which device.
              </p>
              <p className="text-muted">
                We built <strong>Challan∞</strong> to fix that. To help technicians,
                repair shop owners, and small service centers go digital — without
                needing complex software or costly systems.
              </p>
              <p className="text-muted">
                Today, we're proud that our platform powers hundreds of repair stores across India,
                making their work faster, more transparent, and professional.
              </p>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src=""
                alt="Challan Maker Story"
                fluid
                rounded
                className="shadow-sm"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
