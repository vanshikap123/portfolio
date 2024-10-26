import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import About from '../pages/About';
import Navbar from '../component/Navbar';
import Skill from '../pages/Skill';
import Resume from '../pages/Resume';
import Project from '../pages/Project';
import Contact from './Contact';
const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", 'Backend Developer', 'Fullstack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



  return (

    <div className='homePage'>
      <div className='left'>
        <Navbar />
      </div>
      <div className='right'>
        <main className='background'>
          <section id='home' >
            <div className='heading'>
              <h1 className='textes'>Hi' I am <span className='text-info'>Vanshika Pathak</span></h1>
              <p className='fs-3 '> I'm <span id='text 'className='text-info border-bottom' ref={el} /> </p>
            </div>
          </section>
        </main>
        <section id='about'>
          <About />
        </section>
        <section id='skill'>
          <Skill />
        </section>

        <section id='resume'>
          <Resume />
        </section>
        
        <section id='portfolio'>
          <Project />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>

    </div>
  )
}

export default Home;