import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Faq />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}

export default App;
