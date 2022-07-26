import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Ananlytics'
import Newsletter from './components/Newsletter';
import Prices from './components/Prices';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
