import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Get to <strong className="main-name">know</strong> me!
            </h1>
            <p className="home-about-body">
            I completed my A-Levels in Mathematics, Physics, and Computer Science in June 2023. Currently pursuing a DTS degree at Buckinghamshire New University, I joined GHA Solutions in September.
              <br />
              <br />From an early age, I developed a passion for computers and programming, inspired by my father. Known for my creativity and diligent problem-solving, I honed these skills during my A-Levels.         
              <br />
              <br />
              My independent exploration of computer systems has equipped me with an intuitive ability to write effective programs. I have successfully undertaken numerous personal projects, including one that served as my A-Level Computer Science final project. &nbsp;
              <br />
              <br />
              Upon receiving my A-Levels, I swiftly secured a position at GHA Solutions as a degree apprentice, specializing in the study of Epicor and ERP systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style = {{borderRadius: 100}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><strong className="main-name">Connect</strong> with me..</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hxrrybarry"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harry_blender/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harrison-o-leary-03723b2b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <h6>Or don't..</h6>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
