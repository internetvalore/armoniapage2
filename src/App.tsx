import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import LeadForm from './components/LeadForm';
import FloatingNavButton from './components/FloatingNavButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corsi" element={<Courses />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/contatti" element={<Contact />} />
        </Routes>
      </main>
      <LeadForm />
      <FloatingNavButton />
      <Footer />
    </div>
  );
}

export default App;
