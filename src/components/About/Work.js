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
import { motion } from "framer-motion";

function Work() {
  return (
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
            <motion.div initial={{ opacity: 0 }} style={{ y: 100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5}}>
            <h1 style={{ fontSize: "2.1em"}}>
              <br />
              <br />
              What is my work?
            </h1>
            <Aboutcard />     
            <hr className="main-name" />
            </motion.div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />    
            <br />
            <motion.div initial={{ opacity: 0 }} style={{ y: 100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3}}>
            <Tilt>
              <img src={epicorLogo} alt="about" className="img-fluid" />
            </Tilt>
            </motion.div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em" }}>
              <strong className="main-name">Huzzah!</strong>
              <RewardCard />
            </h1>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <motion.div initial={{ opacity: 0 }} style={{ y: 100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5}}>
            <Tilt>
              <img src={ghaLogo} alt="about" className="img-fluid"/>
            </Tilt>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} style={{ y: 100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3}}>
            <h1 style={{ fontSize: "2.1em"}}>
              A tad more on ERP..
            </h1>
            <ERPCard />
            <hr className="main-name" />
            </motion.div>
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
