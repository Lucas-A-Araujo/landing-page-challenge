import React from 'react';
import './styles.css';
import StudantSVG from '../../assets/ilustrations/studant_ilus.jsx';
import LearnSVG from '../../assets/ilustrations/learn_ilus.jsx';
import AccSVG from '../../assets/ilustrations/accesibility_ilus.jsx';
import ForumSVG from '../../assets/ilustrations/forum_ilus.jsx';

function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section why-choose-us-section">
      <div className="why-choose-us-content">
        <div className="why-choose-us-left">
            <h4>Por que aprender na Wiser?</h4>
          <h2>Indo além do básico</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim volutpat enim eu mollis. Nam fringilla nulla vel mauris accumsan molestie. Aenean luctus justo sed sapien luctus, sed ullamcorper dolor efficitur. Morbi facilisis eros eget tristique auctor.</p>
          <div className="button-container">
            <button className="button">Ver mais</button>
          </div>
        </div>
        <div className="why-choose-us-right">
          <div className="why-choose-us-box">
          <StudantSVG/>
            <h3>Instrutores feras</h3>
            <p>Morbi facilisis eros eget tristique auctor. Pellentesque quis lorem ac quam placerat finibus.</p>
          </div>
          <div className="why-choose-us-box">
          <AccSVG/>
            <h3>Acessibilidade</h3>
            <p>Morbi facilisis eros eget tristique auctor. Pellentesque quis lorem ac quam placerat finibus.</p>
          </div>
          <div className="why-choose-us-box">
          <LearnSVG/>
            <h3>Aprenda de qualquer lugar</h3>
            <p>Morbi facilisis eros eget tristique auctor. Pellentesque quis lorem ac quam placerat finibus.</p>
          </div>
          <div className="why-choose-us-box">
          <ForumSVG/>
            <h3>Mentorias em grupo</h3>
            <p>Morbi facilisis eros eget tristique auctor. Pellentesque quis lorem ac quam placerat finibus.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;