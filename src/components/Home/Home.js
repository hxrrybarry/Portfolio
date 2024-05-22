import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <Container fluid className="about-section" id="home">
        <Particle />
        <Container className="home-content">
        <motion.div initial={{ opacity: 0 }} style={{ y: 100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5}}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Greetings Lifeform!{" "}
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Harrison O'Leary</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style ={{ borderRadius: 50 }}
              />
            </Col>
          </Row>
          </motion.div>
        </Container> 
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
