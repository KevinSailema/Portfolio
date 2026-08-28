import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { translations } from "../../i18n";

function Home2({ language = "en" }) {
  const t = translations[language];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t.home2.heading}{" "}
              <span className="purple"> {t.home2.emphasis} </span>{" "}
              {t.home2.myself}
            </h1>
            <p className="home-about-body">
              {t.home2.intro}
              <br />
              <br />
              {t.home2.para2}
              <br />
              <br />
              {t.home2.para3}
              <i>
                <b className="purple">
                  {" "}
                  .NET, C#, Java, Spring Boot, Python, Docker, AWS, Azure, and
                  Terraform{" "}
                </b>
              </i>
              {t.home2.para4}
              <br />
              <br />
              {t.home2.para5}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
