import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { translations } from "../../i18n";

function AboutCard({ language = "en" }) {
  const t = translations[language];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t.aboutCard.intro1}{" "}
            <span className="purple">Kevin Sailema</span>, {t.aboutCard.intro2}{" "}
            <span className="purple">{t.aboutCard.intro3}</span>.
            <br />
            {t.aboutCard.intro4}
            <br />
            {t.aboutCard.intro5}
            <br />
            <br />
            {t.aboutCard.interestTitle}
          </p>

          <ul>
            {t.aboutCard.interests.map((interest, index) => (
              <li key={index} className="about-activity">
                <ImPointRight /> {interest}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &ldquo;{t.aboutCard.quote}&rdquo;{" "}
          </p>
          <footer className="blockquote-footer">{t.aboutCard.footer}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
