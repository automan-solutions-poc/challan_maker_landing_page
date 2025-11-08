import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import api from "../utils/api";

export default function BookDemoModal({ show, handleClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await api.post("/public/book-demo", form);
    setSubmitted(true);
    setLoading(false);
    setTimeout(() => {
      handleClose();
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", business: "" });
    }, 2000);
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="md" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Book a Free Demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <Alert variant="success" className="text-center">
            ✅ Thank you! Our team will contact you soon.
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="you@example.com"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                placeholder="9876543210"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                name="business"
                placeholder="Store or Company Name"
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center mt-4">
              <Button
                type="submit"
                disabled={loading}
                style={{
                  background: "linear-gradient(90deg,#0046FF,#00D4B4)",
                  border: "none",
                }}
                className="px-5 py-2"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}
