import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import ghaLogo from "../../Assets/gha_logo.png";
import epicorLogo from "../../Assets/epicor_logo.png";
import ghaAward from "../../Assets/gha_award.jpeg";
import ERPCard from "./ERPCard";
import RewardCard from "./RewardCard";

function Work() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
              <br />
              <br />
              What is my work?
            </h1>
            <Aboutcard />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              A tad more on ERP..
            </h1>
            <ERPCard />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="main-name">Huzzah!</strong>
              <RewardCard />
            </h1>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={ghaLogo} alt="about" className="img-fluid"/>
            </Tilt>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tilt>
              <img src={epicorLogo} alt="about" className="img-fluid" />
            </Tilt>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tilt>
              <img src={ghaAward} alt="about" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
