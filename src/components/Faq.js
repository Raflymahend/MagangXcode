import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headingLine from "../assets/images/heading-line-dec.png";
import "../assets/css/style.css"; // pastikan style untuk .faq-item-custom dll ada
import "../assets/js/faq.js"; // jika ini memuat fungsi toggleFaqCustom()

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
  const firstColumn = faqData.slice(0, 3);
  const secondColumn = faqData.slice(3);

  return (
    <div id="faq" className="services section py-5">
      <Container>
        {/* Heading */}
        <Row>
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

        {/* FAQ Content */}
        <Row>
          <Col lg={12}>
            <div className="faq-container-custom">
              <Row>
                {/* Kolom kiri */}
                <Col lg={6}>
                  {firstColumn.map((faq, index) => (
                    <div
                      key={index}
                      className="faq-item-custom wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay={`0.${index + 1}s`}
                    >
                      <div
                        className="faq-question-custom"
                        onClick={(e) => window.toggleFaqCustom?.(e.currentTarget)}
                      >
                        <h5>{faq.question}</h5>
                        <div className="faq-icon-custom">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                      <div className="faq-answer-custom">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </Col>

                {/* Kolom kanan */}
                <Col lg={6}>
                  {secondColumn.map((faq, index) => (
                    <div
                      key={index + 3}
                      className="faq-item-custom wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay={`0.${index + 4}s`}
                    >
                      <div
                        className="faq-question-custom"
                        onClick={(e) => window.toggleFaqCustom?.(e.currentTarget)}
                      >
                        <h5>{faq.question}</h5>
                        <div className="faq-icon-custom">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                      <div className="faq-answer-custom">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
