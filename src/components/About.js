import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headingLine from "../assets/images/heading-line-dec.png"; // Ganti sesuai lokasi sebenarnya

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
              <h4>
                <em>PT. Teknologi Server Indonesia</em>
              </h4>
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
              title: "Continuous Security Testing",
              text: "Dengan pendekatan continuous security assessment, kami mengidentifikasi dan memvalidasi perbaikan kerentanan secara konsisten untuk menjaga postur keamanan yang optimal.",
              className: "first-service",
            },
            {
              title: "Rapid Penetration Testing",
              text: "Tim kami menggunakan metodologi testing yang sangat efisien. Proses penetration testing kami dirancang untuk memberikan hasil comprehensive dalam waktu singkat tanpa mengganggu operasional bisnis Anda.",
              className: "second-service",
            },
            {
              title: "Comprehensive Testing Methodology",
              text: "Kami menerapkan framework PTES yang mencakup pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, dan post-exploitation, untuk hasil yang akurat.",
              className: "third-service",
            },
            {
              title: "Expert Penetration Testing Support",
              text: "Tim certified penetration tester kami siap memberikan konsultasi dan support kapan saja. Dari perencanaan scope testing, analisis hasil vulnerability, hingga remediation guidance.",
              className: "fourth-service",
            },
          ].map((item, idx) => (
            <Col lg={3} key={idx}>
              <div className={`service-item ${item.className}`}>
                <div className="icon"></div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
