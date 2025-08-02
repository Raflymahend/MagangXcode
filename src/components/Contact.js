import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headingLine from "../assets/images/heading-line-dec.png";
import pricingIcon from "../assets/images/pricing-table-01.png";

const plans = [
  {
    price: "$12",
    title: "Standard Plan App",
    className: "pricing-item-regular",
    features: [
      { text: "Lorem Ipsum Dolores" },
      { text: "20 TB of Storage" },
      { text: "Life-time Support", disabled: true },
      { text: "Premium Add-Ons", disabled: true },
      { text: "Fastest Network", disabled: true },
      { text: "More Options", disabled: true },
    ],
  },
  {
    price: "$25",
    title: "Business Plan App",
    className: "pricing-item-pro",
    features: [
      { text: "Lorem Ipsum Dolores" },
      { text: "50 TB of Storage" },
      { text: "Life-time Support" },
      { text: "Premium Add-Ons" },
      { text: "Fastest Network", disabled: true },
      { text: "More Options", disabled: true },
    ],
  },
  {
    price: "$66",
    title: "Premium Plan App",
    className: "pricing-item-regular",
    features: [
      { text: "Lorem Ipsum Dolores" },
      { text: "120 TB of Storage" },
      { text: "Life-time Support" },
      { text: "Premium Add-Ons" },
      { text: "Fastest Network" },
      { text: "More Options" },
    ],
  },
];

const Contact = () => {
  return (
    <div id="contact" className="pricing-tables py-5">
      <Container>
        {/* Section Heading */}
        <Row>
          <Col lg={8} className="offset-lg-2 text-center">
            <div className="section-heading">
              <h4>
                <em>Contact Us</em>
              </h4>
              <img src={headingLine} alt="Heading Line" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eismod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </Col>
        </Row>

        {/* Pricing Plans */}
        <Row className="mt-4">
          {plans.map((plan, idx) => (
            <Col lg={4} key={idx}>
              <div className={plan.className}>
                <span className="price">{plan.price}</span>
                <h4>{plan.title}</h4>
                <div className="icon">
                  <img src={pricingIcon} alt="Pricing Icon" />
                </div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={feature.disabled ? "non-function" : ""}
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
