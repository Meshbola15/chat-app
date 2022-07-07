import React from 'react'
import CTA from './CTA';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-blue-600 w-full flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App