import React from "react";
import { Container } from "react-bootstrap";

function Main() {
  return (
    <div>
      <Container>
        <div className="main text-center">
          <h1 className="main-text">Trio Nugroho</h1>
          <h1 className="main-text">Web Developer</h1>
          <p>I am College Student. A person who can easily adapt to new environment, work as a team, <br />social communicate and have a passion in technology and industry itself.</p>
        </div>
        <div className="text-end">
          <a href='#projects' className="btn btn-primary mt-5 ">Enter Projects</a>
        </div>
      </Container>
    </div>
  );
}

export default Main;
