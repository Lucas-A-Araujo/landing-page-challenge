import React from 'react';
import './styles.css';
import WelcomeBackground from '../../assets/welcome-background.jpg';

function WelcomeSection() {
    const welcomeStyle = {
      backgroundImage: `url(${WelcomeBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
  
    return (
      <section id="welcome" className="section welcome-section" style={welcomeStyle}>
        <div className="welcome-content">
          <div className="welcome-text">
            <h3>A qualquer hora em qualquer lugar</h3>
            <h1>Evolua sua carreira em dados com profissionais da area</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim volutpat enim eu mollis. Nam fringilla nulla vel mauris accumsan molestie.</p>
            <div className="button-container">
                <a href="#subscription-form" className="button">Compre agora</a>
                <a href="#our-courses" className="button button-white">Ver cursos</a>
          </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default WelcomeSection;
