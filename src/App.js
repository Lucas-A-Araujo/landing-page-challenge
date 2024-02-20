import React, { useState } from 'react';
import './App.css';
import { NavBar } from './components/Navbar';
import WelcomeSection from './components/Welcome_section';
import ProfessionalsSection from './components/Profissional_section';



function Section({ id, children }) {
  return (
    <section id={id} className="section">
      {children}
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <Section id="why-choose-us">
      <h2>Por que nos Escolher?</h2>
      {/* Razões para escolher a sua plataforma */}
    </Section>
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

function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <h2>Testemunhos de Estudantes</h2>
      {/* Testemunhos de estudantes */}
    </Section>
  );
}

function PricesSection() {
  const [prices] = useState([
    { id: 1, plan: 'Básico', price: 'R$ 99,99/mês' },
    { id: 2, plan: 'Padrão', price: 'R$ 149,99/mês' },
    { id: 3, plan: 'Premium', price: 'R$ 199,99/mês' }
  ]);

  return (
    <Section id="prices">
      <h2>Preços</h2>
      <div className="prices-container">
        {prices.map(price => (
          <div key={price.id} className="price">
            <h3>{price.plan}</h3>
            <p>{price.price}</p>
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
      <CoursesSection />
      <TestimonialsSection />
      <PricesSection />
      <SubscriptionFormSection />
      <Footer />
    </div>
  );
}

export default App;
