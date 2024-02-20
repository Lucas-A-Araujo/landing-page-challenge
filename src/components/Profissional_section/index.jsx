import React from 'react';
import './styles.css';

import ProfissionaOne from '../../assets/profissional_1.jpg';
import ProfissionaTwo from '../../assets/profissional_2.jpg';
import ProfissionaThree from '../../assets/profissional_3.jpg';

function ProfessionalsSection() {
  return (
    <section id="professionals" className="section professionals-section">
      <div className="section-title">
        <p>Instrutores</p>
        <h2>Nossa equipe de profissionais</h2>
      </div>
      <div className="professionals-container">
        <div className="professional-card">
          <img src={ProfissionaOne} alt="Instrutor 1" />
          <h3>Jane Cosmo</h3>
          <p>Ciêntista de dados</p>
          <p>Consectetur adipisicing elit, sed do eius mod tempor incididunt</p>
        </div>
        <div className="professional-card">
          <img src={ProfissionaTwo} alt="Instrutor 2" />
          <h3>Edward Norton</h3>
          <p>Engenheiro de dados</p>
          <p>Consectetur adipisicing elit, sed do eius mod tempor incididunt</p>
        </div>
        <div className="professional-card">
          <img src={ProfissionaThree} alt="Instrutor 3" />
          <h3>Penelope Cruz</h3>
          <p>Analista de dados</p>
          <p>Consectetur adipisicing elit, sed do eius mod tempor incididunt</p>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalsSection;