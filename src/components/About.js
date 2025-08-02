import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headingLine from '../assets/images/heading-line-dec.png'; // Ganti sesuai lokasi sebenarnya

const AboutSection = () => {
  return (
    <div id="about" className="services section">
      {/* Section Heading */}
      <Container>
        <Row>
          <Col lg={8} className="offset-lg-2">
            <div
              className="section-heading wow fadeInDown text-center"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4><em>PT. Teknologi Server Indonesia</em></h4>
              <h4>(X-Code)</h4>
              <img src={headingLine} alt="Line Decoration" />
              <p>
                Kami adalah perusahaan cyber security berbentuk badan hukum PT
                di Yogyakarta, Indonesia. Kami menyediakan jasa vulnerability
                assessment, penetration testing dengan framework PTES, IT
                Security training, IT Security consulting, linux server
                hardening, software development, jasa SOC, layanan hosting,
                layanan dedicated server & Colocation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Services Cards */}
      <Container>
        <Row>
          {[
            {
              title: "App Maintenance",
              text: "You are not allowed to redistribute this template ZIP file on any other website.",
              className: "first-service"
            },
            {
              title: "Rocket Speed of App",
              text: "You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.",
              className: "second-service"
            },
            {
              title: "Multi Workflow Idea",
              text: (
                <>
                  If this template is beneficial for your work, please support us{" "}
                  <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">
                    a little via PayPal
                  </a>. Thank you.
                </>
              ),
              className: "third-service"
            },
            {
              title: "24/7 Help & Support",
              text: "Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.",
              className: "fourth-service"
            }
          ].map((item, idx) => (
            <Col lg={3} key={idx}>
              <div className={`service-item ${item.className}`}>
                <div className="icon"></div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <div className="text-button">
                  <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
