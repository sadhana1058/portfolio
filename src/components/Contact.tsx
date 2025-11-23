import { useState} from "react";
import type { ChangeEvent, FormEvent }from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
// import "animate.css";
import { useInView } from "react-intersection-observer";

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

  const { ref: leftRef, inView: leftVisible } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightVisible } = useInView({ triggerOnce: true });

  // Update form state
  const onFormUpdate = (field: keyof FormDetails, value: string) => {
    setFormDetails(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // Submit handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again later." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Server error. Please try again." });
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* LEFT IMAGE */}
          <Col xs={12} md={6}>
            <div
              ref={leftRef}
              className={leftVisible ? "animate__animated animate__zoomIn" : ""}
            >
              <img src={contactImg} alt="Contact" />
            </div>
          </Col>

          {/* RIGHT FORM */}
          <Col xs={12} md={6}>
            <div
              ref={rightRef}
              className={rightVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <h2>Get In Touch</h2>

              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                      required
                    />
                  </Col>

                  <Col xs={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      required
                    />
                  </Col>

                  <Col xs={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required
                    />
                  </Col>

                  <Col xs={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>

                  <Col xs={12} className="px-1">
                    <textarea
                      rows={6}
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      required
                    />

                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>

                  {status.message && (
                    <Col>
                      <p className={status.success ? "success" : "danger"}>
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
