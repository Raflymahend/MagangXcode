import { Container, Row, Col } from "react-bootstrap";
import introImg from "../img/layanan/intro.jpg"; // Ganti dengan gambar yang sesuai (contoh: slider-dec.png)
import "../assets/css/templatemo-chain-app-dev.css"; // Kalau masih digunakan
import "../assets/css/animated.css"; // Untuk animasi wow
import "../assets/css/owl.css"; // Jika slider dipakai

const Intro = () => {
  return (
    <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              {/* Kiri */}
              <Col lg={6} className="align-self-center">
                <div
                  className="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <Row>
                    <Col lg={12}>
                      <h2>X-code Penetration Testing Services</h2>
                      <p className="fs-4">
                        Pastikan keamanan bisnis Anda dengan layanan penetration
                        testing kami yang berpengalaman.
                      </p>
                    </Col>
                    <Col lg={12}>
                      <div className="white-button first-button scroll-to-section">
                        <a href="#about">Get Started</a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* Kanan */}
              <Col lg={6}>
                <div
                  className="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src={introImg} alt="Penetration Testing" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
