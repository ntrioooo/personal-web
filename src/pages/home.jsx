import React from 'react';
import NavBar from '../components/navbar';
import Main from '../components/main';
import Projects from '../components/projects';

function Home() {
  return (
    <div>
        <NavBar />
        <Main />
        <Projects />
    </div>
  )
}

export default Home