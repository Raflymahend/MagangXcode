import { useEffect } from 'react';
import './App.css';
import './assets/css/templatemo-chain-app-dev.css';
import './assets/css/animated.css';
import './assets/css/owl.css';

// Komponen
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import AboutSection from './components/About';
import Service from './components/Service';
import Team from './components/Team';
import Client from './components/Clients';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Inisialisasi WOW.js setelah halaman dimuat
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div>
      <NavigationBar />

      {/* Hero Section */}
      <Intro />

      {/* Sections */}
      <AboutSection />
      <Service />
      <Team />
      <Client />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
