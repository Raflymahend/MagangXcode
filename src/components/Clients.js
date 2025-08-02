import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headingLine from "../assets/images/heading-line-dec.png";
import quoteIcon from "../assets/images/quote.png";
import clientImage from "../assets/images/client-image.jpg";

const Client = () => {
  return (
    <div id="clients" className="the-clients py-5">
      <Container>
        {/* Section Heading */}
        <Row className="mb-5">
          <Col lg={8} className="offset-lg-2 text-center">
            <div className="section-heading">
              <h4>
                Check What <em>The Clients Say</em> About Our App Dev
              </h4>
              <img src={headingLine} alt="Heading Decoration" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eismod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </Col>
        </Row>

        {/* Testimonial Section */}
        <Row>
          <Col lg={12}>
            <div className="naccs">
              <div className="grid">
                <Row>
                  {/* Left Testimonial Meta */}
                  <Col lg={7} className="align-self-center">
                    <div className="menu">
                      {[
                        {
                          name: "David Martino Co",
                          date: "30 November 2021",
                          category: "Financial Apps",
                          rating: "4.8",
                        },
                        {
                          name: "Jake Harris Nyo",
                          date: "29 November 2021",
                          category: "Digital Business",
                          rating: "4.5",
                        },
                        {
                          name: "May Catherina",
                          date: "27 November 2021",
                          category: "Business & Economics",
                          rating: "4.7",
                        },
                        {
                          name: "Random User",
                          date: "24 November 2021",
                          category: "New App Ecosystem",
                          rating: "3.9",
                        },
                        {
                          name: "Mark Amber Do",
                          date: "21 November 2021",
                          category: "Web Development",
                          rating: "4.3",
                        },
                      ].map((item, idx) => (
                        <div className={`thumb ${idx === 0 ? "first-thumb active" : ""}`} key={idx}>
                          <Row>
                            <Col lg={4} sm={4} xs={12}>
                              <h4>{item.name}</h4>
                              <span className="date">{item.date}</span>
                            </Col>
                            <Col lg={4} sm={4} className="d-none d-sm-block">
                              <span className="category">{item.category}</span>
                            </Col>
                            <Col lg={4} sm={4} xs={12}>
                              {Array.from({ length: 5 }).map((_, i) => (
                                <i className="fa fa-star" key={i}></i>
                              ))}
                              <span className="rating">{item.rating}</span>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </div>
                  </Col>

                  {/* Right Testimonials */}
                  <Col lg={5}>
                    <ul className="nacc">
                      {[
                        {
                          content:
                            "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "David Martino",
                          position: "CEO of David Company",
                        },
                        {
                          content:
                            "“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "Jake H. Nyo",
                          position: "CTO of Digital Company",
                        },
                        {
                          content:
                            "“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "May C.",
                          position: "Founder of Catherina Co.",
                        },
                        {
                          content:
                            "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "Random Staff",
                          position: "Manager, Digital Company",
                        },
                        {
                          content:
                            "“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "Mark Am",
                          position: "CTO, Amber Do Company",
                        },
                      ].map((client, idx) => (
                        <li className={idx === 0 ? "active" : ""} key={idx}>
                          <div className="thumb">
                            <Row>
                              <Col lg={12}>
                                <div className="client-content">
                                  <img src={quoteIcon} alt="Quote" />
                                  <p>{client.content}</p>
                                </div>
                                <div className="down-content">
                                  <img src={clientImage} alt={client.name} />
                                  <div className="right-content">
                                    <h4>{client.name}</h4>
                                    <span>{client.position}</span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Client;
