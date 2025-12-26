import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection({ onBookDemo }) {
  return (
    <section
      className="text-center text-white d-flex align-items-center"
      style={{
        background: "linear-gradient(120deg, #0046FF 0%, #00D4B4 100%)",
        minHeight: "90vh",
        color: "#fff",
      }}
    >
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-4 fw-bold mb-3"
        >
          Manage Repairs Seamlessly with <br />
          <span style={{ color: "#fff" }}>Challan∞</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lead mb-4 text-light"
        >
          Smart challan management, branded PDFs, and OTP verification — all in one powerful SaaS.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <Link to="/book-demo">
<Button
  size="lg"
  className="btn-primary me-3 px-5 py-2"
  onClick={onBookDemo}
>
  Book a Demo
</Button>          </Link>
          {/* <Button
            size="lg"
            variant="outline-light"
            href="https://portal.challanmaker.com"
            className="px-5 py-2"
          >
            Tenant Login
          </Button> */}
        </motion.div>
      </Container>
    </section>
  );
}
