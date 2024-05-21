import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am currently employed as an <strong className="main-name">Apprentice Junior Developer</strong> at GHA Solutions. More specifically, my role is: <strong className="main-name"> Epicor Developer. </strong>
            <br />
            <br />
            This entails me requiring a deep understanding  and versatile skill set within <strong className="main-name">ERP Systems</strong> and programming as a whole.
            <br />
            <br />
            If you would like to read more about <strong className="main-name">Epicor</strong> and <strong className="main-name">GHA Solutions</strong>, click <a href="https://www.ghasolutions.co.uk/" target="_blank">Here</a> to visit their website.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
