import React, { useState, useEffect } from 'react';
import './styles.css';

export function NavBar() {
    const [selectedLink, setSelectedLink] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        if (scrollPosition < 500) {
          setSelectedLink('welcome');
        } else if (scrollPosition >= 500 && scrollPosition < 1000) {
          setSelectedLink('professionals');
        } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
          setSelectedLink('why-choose-us');
        } else if (scrollPosition >= 1500 && scrollPosition < 2000) {
          setSelectedLink('our-courses');
        } else if (scrollPosition >= 2000 && scrollPosition < 2500) {
          setSelectedLink('testimonials');
        } else if (scrollPosition >= 2500 && scrollPosition < 3000) {
          setSelectedLink('prices');
        } else if (scrollPosition >= 3000) {
          setSelectedLink('subscription-form');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <nav className="navbar" style={{ backgroundColor: '#0D5EF4' }}>
        <div className="container navbar-content">
          <div className="navbar-left">
            <h1 className="navbar-title">Wizer</h1>
          </div>
          <div className="navbar-right">
            <a href="#welcome" className={selectedLink === 'welcome' ? 'selected' : ''}>Bem Vindo</a>
            <a href="#professionals" className={selectedLink === 'professionals' ? 'selected' : ''}>Profissionais</a>
            <a href="#why-choose-us" className={selectedLink === 'why-choose-us' ? 'selected' : ''}>Por que nos escolher?</a>
            <a href="#our-courses" className={selectedLink === 'our-courses' ? 'selected' : ''}>Nossos Cursos</a>
            <a href="#testimonials" className={selectedLink === 'testimonials' ? 'selected' : ''}>Testemunhos</a>
            <a href="#prices" className={selectedLink === 'prices' ? 'selected' : ''}>Preços</a>
          </div>
        </div>
      </nav>
    );
  }