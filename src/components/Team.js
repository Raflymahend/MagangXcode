import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import kurniawan from "../assets/images/kurniawan.png";
import dyan from "../assets/images/dyan.png";
import sani from "../assets/images/sani.jpg";
import gizka from "../assets/images/gizka.png";
import "../assets/css/style.css";

const teamMembers = [
  {
    name: "Kurniawan, S.Kom., M.Cs.",
    position: "Lead Penetration tester",
    img: kurniawan,
    delay: "0.1s",
  },
  {
    name: "DyanGalih, S.Kom.",
    position: "Penetration Tester\nStaff Xcode",
    img: dyan,
    delay: "0.3s",
  },
  {
    name: "Mas Sani",
    position: "Project Manager\nPenetration Tester",
    img: sani,
    delay: "0.1s",
  },
  {
    name: "Mbak Gizka",
    position: "Penetration Tester\nStaff Xcode",
    img: gizka,
    delay: "0.6s",
  },
];

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <Container className="px-lg-5">
        <div
          className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h6 className="position-relative d-inline text-primary ps-4">Our Team</h6>
          <h2 className="mt-2">Meet Our Team Members</h2>
        </div>
        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col
              lg={3}
              md={6}
              className="wow fadeInUp"
              data-wow-delay={member.delay}
              key={index}
            >
              <div className="team-item">
                <div className="d-flex">
                  <div
                    className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                    style={{ width: "75px" }}
                  >
                    {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, idx) => (
                      <a
                        key={idx}
                        className="btn btn-square text-primary bg-white my-1"
                        href="#"
                      >
                        <i className={`fab fa-${icon}`}></i>
                      </a>
                    ))}
                  </div>
                  <img
                    className="img-fluid rounded w-100"
                    src={member.img}
                    alt={member.name}
                  />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">{member.name}</h5>
                  <small dangerouslySetInnerHTML={{ __html: member.position.replace(/\n/g, "<br />") }} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
