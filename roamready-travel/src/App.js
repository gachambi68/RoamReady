import React from 'react';
import './styles/global.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
      <NavBar />
    </div>
  );
}

export default App;