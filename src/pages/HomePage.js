import React from 'react';
import Intro from '../components/Intro';
import Featured from '../components/Featured';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Intro />
      <Featured />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
