import React from "react";
import Card from "react-bootstrap/Card";

function ERPCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <strong className="main-name">Enterprise Resource Planning</strong>, or ERP, is the idea of organising and manipulating the integral parts of your business in real time.
            <br />
            <br />
            This may include many things such as managing shipments, sales orders, parts or reports - which are all critical parts of <strong className="main-name">business management</strong>.
            <br />
            <br />
            Among these tasks is the idea of <strong className="main-name">Data Manipulation</strong>. For instance, you may desire highly complex behaviors to occur when data is altered or added, this is where I come in as the <strong className="main-name">Epicor Developer.</strong>
            <br />
            <br />
            You can read more about Epicor ERP on their <a href="https://www.epicor.com/en-uk/">website</a>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ERPCard;