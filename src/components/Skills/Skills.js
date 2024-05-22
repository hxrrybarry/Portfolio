import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import SkillCard from "./SkillCard";
import csharp from "./csharp_logo.png";
import python from "./python_logo.png";
import sql from "./sql_logo.png";
import epicor from "./epicor_e.jpg";
import query from "./query_icon.png";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="main-name">skills</strong>..
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my skills that I believe to be <strong className="main-name">strong</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h2>Languages</h2>

          <Col md={4} className="project-card">
            <SkillCard
              imgPath={csharp}
              description="My main language of choice is, as you probably guessed from my projects section, C#. I began learning C# three years ago, and I fell in love with it instantly. I find the sytnax of C# to be highly intuitive, whilst also offering great power and speed."
            />
          </Col>

          <Col md={4} className="project-card">
            <SkillCard
              imgPath={python}
              description="Like many, my first language of choice was Python - which began about five years ago. Python is a great language for beginners; offering many libraries and tools for simple active development. The syntax is a breeze to learn - whilst still remaining a powerful language. Whilst being interpreted, and therefore slow, its speed of development more thank makes up for it."
            />
          </Col>

          <Col md={4} className="project-card">
            <SkillCard
              imgPath={sql}
              description="The main industry-standard choice of language for database management is SQL. SQL has relatively simple syntax, making managing your database programatically easy and efficient. Because of this, I decided to embark on a journey learning SQL - as my job has day-to-day interactions with extremely large databases.+"
            />
          </Col> 
        </Row>

        <h2><strong className="main-name">ERP</strong> Systems</h2>
        <p style={{ color: "white" }}>
          Here are some of my <strong className="main-name">specific</strong> skills within ERP
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <SkillCard
              imgPath={epicor}
              description="In the past year, I have spent a great deal of my time working with Epicor. Day in day out, I meticulously deconstructed and reverse-engineer Epicor's methodology. After some time, I can confidently say that I know generalized Epicor paridigm to a strong degree."
            />
          </Col>

          <Col md={4} className="project-card">
            <SkillCard
              imgPath={query}
              description="One of the main features within Epicor is the ability to write BAQs, or: Business Activity Queries. These are essentially a more powerful way to interact with your database via SQL. Whilst you can do basic things like merely querying, you can also attach functionality to it via the usage of a BPM."
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Skills;