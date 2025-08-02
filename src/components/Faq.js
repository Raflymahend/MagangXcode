import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import headingLine from "../assets/images/heading-line-dec.png";

const faqData = [
  {
    question: "What is penetration testing and why do I need it?",
    answer:
      "Penetration testing is a simulated cyber attack against your computer system to check for exploitable vulnerabilities. It helps identify security weaknesses before malicious hackers do, protecting your business data and reputation.",
  },
  {
    question: "How long does a penetration test take?",
    answer:
      "The duration depends on the scope and complexity of your systems. Typically, a standard web application test takes 3-5 days, while comprehensive network testing can take 1-2 weeks. We'll provide a detailed timeline during consultation.",
  },
  {
    question: "What types of penetration testing do you offer?",
    answer:
      "We offer various types including web application testing, network penetration testing, mobile app testing, wireless security testing, and social engineering assessments. Each test is customized to your specific infrastructure and needs.",
  },
  {
    question: "Will the testing disrupt our business operations?",
    answer:
      "We design our tests to minimize disruption to your operations. Most testing is performed during off-hours or maintenance windows. We coordinate closely with your team to ensure business continuity throughout the process.",
  },
  {
    question: "What do we receive after the penetration test?",
    answer:
      "You'll receive a comprehensive report detailing all findings, risk ratings, proof of concept for vulnerabilities, and prioritized remediation recommendations. We also provide an executive summary for management and technical details for your IT team.",
  },
  {
    question: "How often should we conduct penetration testing?",
    answer:
      "We recommend annual penetration testing as a baseline, with additional testing after major system changes, new deployments, or security incidents. High-risk organizations may benefit from quarterly assessments.",
  },
];

const Faq = () => {
  return (
    <div id="faq" className="services section py-5">
      <Container>
        {/* Heading */}
        <Row className="mb-4">
          <Col lg={8} className="offset-lg-2 text-center">
            <div
              className="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4>
                <em>Frequently Asked Questions</em>
              </h4>
              <img src={headingLine} alt="heading" />
              <p className="mb-1">
                Want to ask something from us? Here are the most commonly asked
                questions about our penetration testing services.
              </p>
            </div>
          </Col>
        </Row>

        {/* FAQ Accordion */}
        <Row>
          <Col lg={12}>
            <Accordion defaultActiveKey="0" alwaysOpen>
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
