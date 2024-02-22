import React, { useState } from 'react';
import './styles.css';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const testimonials = [
      {
        id: 1,
        testimonial: "Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Sapien in monti palavris qui num significa nadis i pareci latim. In elementis mé pra quem é amistosis quis leo. Leite de capivaris, leite de mula manquis sem cabeça. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Sapien in monti palavris qui num significa nadis i pareci latim.",
        name: "John Doe",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        testimonial: "Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Sapien in monti palavris qui num significa nadis i pareci latim. In elementis mé pra quem é amistosis quis leo. Leite de capivaris, leite de mula manquis sem cabeça. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Sapien in monti palavris qui num significa nadis i pareci latim.",
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        testimonial: "Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Sapien in monti palavris qui num significa nadis i pareci latim. In elementis mé pra quem é amistosis quis leo. Leite de capivaris, leite de mula manquis sem cabeça. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Sapien in monti palavris qui num significa nadis i pareci latim.",
        name: "Alice Johnson",
        avatar: "https://via.placeholder.com/150",
      },
    ];

    const lastIndex = testimonials.length - 1;
    const prevIndex = currentSlide === 0 ? lastIndex : currentSlide - 1;
    const nextIndex = currentSlide === lastIndex ? 0 : currentSlide + 1;

    return (
      <div id="testimonials" className="testimonials-section">
        <h2>Testemunhos</h2>
        <h3>O que nossos alunos dizem</h3>
        <div className="testimonials-carousel">
          {[prevIndex, currentSlide, nextIndex].map((index) => (
            <div key={testimonials[index].id} className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}>
              <p className="testimonial-text">{testimonials[index].testimonial}</p>
              <hr className="testimonial-divider" />
              <div className="testimonial-author">
                <img src={testimonials[index].avatar} alt={testimonials[index].name} className="avatar" />
                <p className="author-name">{testimonials[index].name}</p>
              </div>
            </div>
          ))}
          <button className="prev-button" onClick={() => setCurrentSlide(prevIndex)}>&lt;</button>
          <button className="next-button" onClick={() => setCurrentSlide(nextIndex)}>&gt;</button>
        </div>
      </div>
    );
};

export default TestimonialsSection;