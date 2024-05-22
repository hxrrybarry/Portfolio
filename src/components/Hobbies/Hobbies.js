import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import snookerOne from "./snooker_1.jpg";
import snookerTwo from "./snooker_2.jpg";
import snookerThree from "./snooker_3.jpg";

import { motion } from "framer-motion";

function Hobbies() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="main-name">hobbies</strong>..
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my <strong className="main-name">favourite</strong> hobbies
        </p>
        <hr className="main-name" />
        <motion.div initial={{ opacity: 0 }} style={{ y: 100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5}}>
        <h1>SNOOKER</h1>
        <hr className="main-name" />
        <Row>
            <Col>
                <Tilt>
                <img src={snookerOne} className="snookerImages" alt="avatar" style = {{borderRadius: 20}} />
                </Tilt>
            </Col>
            <Col>
                <Tilt>
                <img src={snookerTwo} className="snookerImages" alt="avatar" style = {{borderRadius: 20}} />
                </Tilt>
            </Col>
            <Col>
                <Tilt>
                <img src={snookerThree} className="snookerImages" alt="avatar" style = {{borderRadius: 20}} />
                </Tilt>
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <p>One of my favourite hobbies is playing snooker. This started when I was younger - when my grandfather introduced me to the sport, and I began playing with him. Nowadays, you can find me at my local snooker hall playing a minimum of once a week.</p>
        <br />
        <p>In parallel to snooker, another interest I take part in is pool. I have been playing for about two years now, and have greatly increased in skill since I started playing. I will play pool multiple times a week at either my local pub, or a sports hall - I used to play for my local, but don't anymore due to lack of time.</p>
        </motion.div>

      </Container>
    </Container>
  );
}

export default Hobbies;