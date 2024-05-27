import React from 'react'
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Project from './components/Ready';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landingpage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Project />
      <Footer />
    </div>
  )
}

export default App