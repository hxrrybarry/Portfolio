import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pulsate from "../../Assets/Projects/pulsate_image.png";
import terminalPhysics from "../../Assets/Projects/terminal-physics_image.png";
import jumperDates from "../../Assets/Projects/jumperdatesico.png";
import lexi from "../../Assets/Projects/lexi.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="main-name">projects</strong>..
        </h1>
        <p style={{ color: "white" }}>
          Displayed are my <strong className="main-name">favourite</strong> projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pulsate}
              title="PULSaTE"
              description="Poly Use Linked Storage and Text Editor. This allows you to group files into a single file called a glob. These files are compressed, and can be encrypted with a password. It can do other things such as: navigate your storage, view and edit text files (with built-in JSON syntax highlighting!), view images, play music and download YouTube videos. All within a terminal based interface."
              ghLink="https://github.com/hxrrybarry/globulator-wpf"
              version="v1.3.1-beta"
              language="Language: C#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terminalPhysics}
              title="Terminal Physics"
              description="A light-weight physics engine all written to partake in terminal hijinks. The physics objects, known as 'Rigid Bodies', all undergo simulated friction, gravity and a rudimentary simple collision system. Everything is handeled via a simple voxel engine, where every object seen on screen is a physically simulated voxel. The map seen is procedurally generated using the Voronoi Noise algorithm, which allows for interesting cave-like structure."
              ghLink="https://github.com/hxrrybarry/terminal-physics"
              version="v1.1.1-alpha"
              language="Language: C#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jumperDates}
              title="Jumper Dates"
              description="A simple app that allowed my colleague and I to book a date for wearing a jumper we both owned. It involved the back end running on my Raspberry Pi at home, with the front end Flutter app connecting to it."
              ghLink="https://github.com/hxrrybarry/Jumper-Dates-Backend"
              header="Co-Written by Ashton Dunderdale"
              version="v1.0.0-release"
              language="Languages: C#, Flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexi}
              title="Lexi"
              description="A simple voice-activated virtual assistant that was submitted as my final A-Level computer science coursework. The assistant can do various things including setting and sending reminders to your phone, create shopping lists, directory and file manipulation via file explorer and encrypting files. It even came with a built in in interpreter, for a language I call Py#!"
              ghLink="https://github.com/hxrrybarry/lexi"
              version="v1.0.0-release"
              language="Language: C#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;