import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { translations } from "../../i18n";

function About({ language = "en" }) {
  const t = translations[language];

  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t.about.heading}{" "}
                <strong className="purple">{t.about.emphasis}</strong>
              </h1>
              <Aboutcard language={language} />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            {t.about.skillset}{" "}
            <strong className="purple">{t.about.skillsetEmphasis} </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">{t.about.tools}</strong>{" "}
            {t.about.toolsEmphasis}
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
