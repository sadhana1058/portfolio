import { useState, useEffect } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Col, Row, Alert } from "react-bootstrap";

interface NewsletterProps {
  status: "sending" | "success" | "error" | null;
  message: string | null;
  onValidated: (formData: { EMAIL: string }) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  status,
  message,
  onValidated,
}) => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      onValidated({
        EMAIL: email,
      });
    }
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter
              <br />
              & Never miss latest updates
            </h3>

            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && (
              <Alert variant="danger">{message}</Alert>
            )}
            {status === "success" && (
              <Alert variant="success">{message}</Alert>
            )}
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  placeholder="Email Address"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
