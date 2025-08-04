import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headingLine from "../assets/images/heading-line-dec.png";
import "../assets/css/style.css"; // pastikan style untuk .faq-item-custom dll ada
import "../assets/js/faq.js"; // jika ini memuat fungsi toggleFaqCustom()

const faqData = [
  {
    question: "Bagaimana jika ingin menggunakan jasa pentest X-code ?",
    answer: "Hubungi kami di WA 0858 0394 6032.",
  },
  {
    question: "Apakah jasa pentest dibayar sebelum pentest ?",
    answer:
      "Jasa pentest bisa dibayar full sebelum pentest atau uang muka 50% sebelum pentest.",
  },
  {
    question: "Apakah X-code menerima jasa server security hardening?",
    answer: "Iya menerima.",
  },
  {
    question: "Apakah X-code melayani jasa SOC ?",
    answer: "Iya, X-code melayani jasa SOC untuk minimal kontrak 1 tahun.",
  },
  {
    question: "Bagaimana langkah untuk menggunakan jasa X-code ?",
    answer: "Anda bisa menghubungi kami lewat whatsapp atau e-mail.",
  },
  // {
  //   question: "How often should we conduct penetration testing?",
  //   answer:
  //     "We recommend annual penetration testing as a baseline, with additional testing after major system changes, new deployments, or security incidents. High-risk organizations may benefit from quarterly assessments.",
  // },
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
                        onClick={(e) =>
                          window.toggleFaqCustom?.(e.currentTarget)
                        }
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
                        onClick={(e) =>
                          window.toggleFaqCustom?.(e.currentTarget)
                        }
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
