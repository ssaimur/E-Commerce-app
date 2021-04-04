import React from 'react';
import './aboutPage.css';
import LinkViewer from '../components/LinkViewer';
import aboutImg from '../images/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <LinkViewer title='about' />
      <div className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='page-title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </div>
    </main>
  );
};

export default AboutPage;
