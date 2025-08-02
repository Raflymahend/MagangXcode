import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/xcode.png";

const Footer = () => {
  return (
    <footer id="newsletter">
      <Container>
        <Row>
          <Col lg={8} className="offset-lg-2 text-center">
            <div className="section-heading">
              <h4>
                Join our mailing list to receive the news &amp; latest trends
              </h4>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Contact Info */}
          <Col lg={3}>
            <div className="footer-widget">
              <h4>CONTACT US</h4>
              <p>
                Office 1 <br />
                Minggiran MJ2 RT 58 RW 16, Kota <br />
                Yogyakarta
              </p>
              <p>
                Office 2 <br />
                Jl Kebun Raya Gg. Terate No. 29 - Lantai 2, <br />
                (Timur Gembira Loka Zoo)
              </p>
              <p className="fw-bold">
                Phone: <a href="#">0858 0394 6032</a>
              </p>
              <p className="fw-bold">
                Email: <a href="#">admin@xcodetraining.com</a>
              </p>
            </div>
          </Col>

          {/* X-Code Links */}
          <Col lg={3}>
            <div className="footer-widget">
              <h4>X-CODE LINKS</h4>
              <ul>
                <li><a href="https://xcode.co.id/">Company Website</a></li>
                <li><a href="https://xcode.co.id/professional/">X-Code Professional</a></li>
                <li><a href="https://kelashacker.com/">Kelas Hacker</a></li>
                <li><a href="https://xcodehoster.com">Xcodehoster</a></li>
                <li><a href="https://github.com/kurniawandata">Produk Open Source</a></li>
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={3}>
            <div className="footer-widget">
              <h4>OUR SERVICES</h4>
              <ul>
                <li><a href="https://xcode.co.id/professional/">X-Code Training</a></li>
                <li><a href="https://xcode.co.id/webinar/">X-Code Webinar</a></li>
                <li><a href="https://nasihosting.com/">Layanan Hosting, VPS & Colocation</a></li>
                <li><a href="https://kelasdevops.com">Kelas DevOps</a></li>
              </ul>
            </div>
          </Col>

          {/* About */}
          <Col lg={3}>
            <div className="footer-widget">
              <h4>About Our Company</h4>
              <div className="logo mb-3">
                <img src={logo} alt="Xcode Logo" style={{ maxWidth: "150px" }} />
              </div>
              <p>
                Perusahaan PT. Teknologi Server Indonesia, perseroan terbatas berbadan hukum yang
                bergerak di bidang Cyber Security.
              </p>
            </div>

            {/* Social Media */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.linkedin.com/company/xcodetraining" className="social-icon text-dark fs-4">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/groups/yogyafreexcode" className="social-icon text-dark fs-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/teknologiserverindonesia/#" className="social-icon text-dark fs-4">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>

          {/* Copyright */}
          <Col lg={12} className="text-center mt-4">
            <div className="copyright-text">
              <p>Copyright © 2025 X-Code Company. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
