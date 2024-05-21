import React from "react";
import Card from "react-bootstrap/Card";

function RewardCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Rather recently, GHA Solutions were awarded second place for "Employee of the Year" for companies with under fifty employees from Burnley College!
            <br />
            <br />
            We all had a great night here, with a provided three course meal and bar. 
            <br />
            <br />
            Here you can see our Development Manager, Peter Roden, and two of my co-workers Ashton Dunderdale and Bartłomiej Wojda all looking very proud of ourselves!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default RewardCard;