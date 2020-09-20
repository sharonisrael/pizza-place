import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

// import { Link } from "react-router-dom";
// <Link className="btn btn-primary" to="/pizzas">
//   {" "}
//   Add course{" "}
// </Link>;

const ContactUsPage = () => (
  <div>
    <Jumbotron>
      <h1>Pizza place</h1>
      <img
        src="/images/pizza-place.jpg"
        alt="place"
        rounded="true"
        style={{ height: "250px" }}
      />
      <p>
        We are always happy to serve you pizza <br></br>
        Better order from the web
      </p>
      <p>
        <Button href="/pizzas" variant="primary">
          Order pizza
        </Button>
      </p>
    </Jumbotron>
  </div>
);

export default ContactUsPage;
