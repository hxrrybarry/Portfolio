import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import snookerOne from "./snooker_1.jpg";
import snookerTwo from "./snooker_2.jpg";
import snookerThree from "./snooker_3.jpg";
import minecraft from "./minecraft_ico.png";
import gmod from "./gmod-logo.png";
import outerWilds from "./outer_wilds-co.png";
import csharp from "../Skills/csharp_logo.png";
import python from "../Skills/python_logo.png";
import java from "./java-logo.png";

import { motion } from "framer-motion";

function Hobbies() {
  return (
    <Container fluid className="about-section">
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

        <hr className="main-name" />
        <motion.div initial={{ opacity: 0 }} style={{ y: 100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2}}>
        <Row>
        <h1>GAMING</h1>
        <hr className="main-name" />
        <Col>
                <Tilt>
                <img src={minecraft} className="snookerImages" alt="avatar" />
                </Tilt>
            </Col>
            <Col>
                <Tilt>
                <img src={gmod} className="snookerImages" alt="avatar" />
                </Tilt>
            </Col>
            <Col>
                <Tilt>
                <img src={outerWilds} className="snookerImages" alt="avatar" />
                </Tilt>
        </Col>
        </Row>
        <br />
        <br />
        <br />
        <p>Like many, one of my favourite hobbies is gaming. My current favourite games are Minecraft for the sandbox "DIY" style, Garry's Mod for the sheer creative aspect and modability and Outer Wilds for the story and gameplay.</p>
        <br />
        <p>In my times of playing Minecraft, I tended to get stuck in with designing redstone machines and commands. My favourite projects were developing the Rick & Morty portal gun with commands, and designing a 4-bit adder circuit with redsone.</p>
        <br />
        <p>I don't play video games as much as I previously once did, but when I do: I ensure that it is worthwhile.</p>
        </motion.div>
        <hr className="main-name" />
        <Row>
        <h1>PROGRAMMING</h1>
        <hr className="main-name" />
        <Col>
          <Tilt>
            <img src={csharp} className="snookerImages" alt="avatar" />
          </Tilt>
        </Col>
        <Col>
          <Tilt>
            <img src={python} className="snookerImages" alt="avatar" />
          </Tilt>
        </Col>
        <Col>
          <Tilt>
          <img src={java} className="snookerImages" alt="avatar" />
          </Tilt>
        </Col>
        </Row>
        <br />
        <br />
        <br />
        <p>Evidently, I am a large fan of programming. This all started from a young age when I tinkered with my father's old ZX Spectrum. From there, I have always found it incredibly interesting and creatively fulfilling to write programs that can be substituted into my daily usage.</p>
        <br />
        <p>Successfully writing a useful and/or fun piece of software releases a feeling of accomplishment and success like no other.</p>
      </Container>
    </Container>
  );
}

export default Hobbies;