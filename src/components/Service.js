import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headingLine from '../assets/images/heading-line-dec.png';
import serviceImage from '../assets/images/about-right-dec.png';

const Service = () => {
  return (
    <div id="service" className="about-us section">
      <Container>
        <Row>
          {/* Kiri - Konten */}
          <Col lg={6} className="align-self-center">
            <div className="section-heading">
              <h4>
                About <em>What We Do</em> &amp; Who We Are
              </h4>
              <img src={headingLine} alt="Heading Decoration" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eismod tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <Row>
              {[
                { title: "Maintance Problems", desc: "Lorem Ipsum Text" },
                { title: "24/7 Support & Help", desc: "Lorem Ipsum Text" },
                { title: "Fixing Issues About", desc: "Lorem Ipsum Text" },
                { title: "Co. Development", desc: "Lorem Ipsum Text" },
              ].map((item, index) => (
                <Col lg={6} key={index}>
                  <div className="box-item">
                    <h4>
                      <a href="#">{item.title}</a>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}

              <Col lg={12}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor idunte ut labore et dolore adipiscing magna.
                </p>
                <div className="gradient-button">
                  <a href="#">Start 14-Day Free Trial</a>
                </div>
                <span>*No Credit Card Required</span>
              </Col>
            </Row>
          </Col>

          {/* Kanan - Gambar */}
          <Col lg={6}>
            <div className="right-image">
              <img src={serviceImage} alt="Service Illustration" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
