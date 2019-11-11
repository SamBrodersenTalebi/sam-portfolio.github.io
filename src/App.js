import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import AboutMe from './components/aboutme/aboutme';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <main id="wrapper">
          <Navbar />
          <Header />
          <Skills />
          <AboutMe />
          <Portfolio />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
     
      
    );
  }

}

export default App;
