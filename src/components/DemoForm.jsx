import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import api from "../utils/api";

export default function DemoForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/public/book-demo", form);
    setSubmitted(true);
  };

  return (
    <div className="mt-4">
      {submitted ? (
        <Alert variant="success">✅ Thanks! We'll contact you soon.</Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Business Name</Form.Label>
            <Form.Control name="business" onChange={handleChange} />
          </Form.Group>
          <Button
            type="submit"
            style={{ backgroundColor: "#0046FF", border: "none" }}
            className="w-100"
          >
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
