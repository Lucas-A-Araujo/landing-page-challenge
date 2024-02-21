import React, { useState } from 'react';
import './App.css';
import { NavBar } from './components/Navbar';
import WelcomeSection from './components/Welcome_section';
import ProfessionalsSection from './components/Profissional_section';
import WhyChooseUsSection from './components/WhyUs_section';
import Validationomponent from './components/validation_section';
import TestimonialsSection from './components/Testimonials_section';
import PricesSection from './components/Prices_section';



function Section({ id, children }) {
  return (
    <section id={id} className="section">
      {children}
    </section>
  );
}

function CoursesSection() {
  const [courses] = useState([
    { id: 1, title: 'Curso 1' },
    { id: 2, title: 'Curso 2' },
    { id: 3, title: 'Curso 3' }
  ]);

  return (
    <Section id="our-courses">
      <h2>Nossos Cursos</h2>
      <div className="courses-container">
        {courses.map(course => (
          <div key={course.id} className="course">
            <h3>{course.title}</h3>
            {/* Detalhes do curso */}
          </div>
        ))}
      </div>
    </Section>
  );
}

function SubscriptionFormSection() {
  return (
    <Section id="subscription-form">
      <h2>Assine Agora</h2>
      {/* Formulário de assinatura */}
    </Section>
  );
}

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
