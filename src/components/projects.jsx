import React from "react";
import { Container, Card } from "react-bootstrap";
import CardProject from "./Cards";
import imgProject from '../project-1.png'

function Projects() {
  return (
    <div id="projects">
      <Container>
        <div>
          <h2 className="text-end">My project</h2>
        </div>
        <CardProject />
      </Container>
    </div>
  );
}

export default Projects;
