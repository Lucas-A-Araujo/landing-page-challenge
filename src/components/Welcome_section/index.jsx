import React from 'react';
import './styles.css';
import WelcomeBackground from '../../assets/welcome-background.jpg'; // Importe sua imagem aqui

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
            <h1>Bem Vindo à Nossa Plataforma de Cursos!</h1>
            <p>Aprenda com os melhores profissionais e alcance o seu potencial.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default WelcomeSection;
