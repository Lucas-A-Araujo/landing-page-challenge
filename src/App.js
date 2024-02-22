import React, { useState } from 'react';
import './App.css';
import { NavBar } from './components/Navbar';
import WelcomeSection from './components/Welcome_section';
import ProfessionalsSection from './components/Profissional_section';
import WhyChooseUsSection from './components/WhyUs_section';
import Validationomponent from './components/validation_section';
import TestimonialsSection from './components/Testimonials_section';
import PricesSection from './components/Prices_section';
import SubscriptionFormSection from './components/form_section';
import CoursesSection from './components/Courses_section';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeSection />
      <ProfessionalsSection />
      <WhyChooseUsSection />
      <Validationomponent/>
      <CoursesSection />
      <TestimonialsSection />
      <PricesSection />
      <SubscriptionFormSection />
      <Footer />
    </div>
  );
}

export default App;
