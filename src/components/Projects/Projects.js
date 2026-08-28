import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { translations } from "../../i18n";

function Projects({ language = "en" }) {
  const t = translations[language];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t.projects.heading}{" "}
          <strong className="purple">{t.projects.emphasis} </strong>
        </h1>
        <p style={{ color: "white" }}>{t.projects.subtitle}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={t.projects.cards.tradis.title}
              description={t.projects.cards.tradis.description}
              ghLink="https://github.com/KevinSailema"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={t.projects.cards.opensource.title}
              description={t.projects.cards.opensource.description}
              ghLink="https://github.com/KevinSailema"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={t.projects.cards.healthcare.title}
              description={t.projects.cards.healthcare.description}
              ghLink="https://github.com/KevinSailema"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
