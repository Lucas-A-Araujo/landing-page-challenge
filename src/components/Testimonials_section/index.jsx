import React, { useState } from 'react';
import './styles.css';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const testimonials = [
      {
        id: 1,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquam turpis. Aliquam erat volutpat.",
        name: "John Doe",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        testimonial: "Sed dictum libero vel magna laoreet, id tincidunt ligula elementum. Integer nec leo non odio aliquet efficitur.",
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        testimonial: "Vestibulum in augue eu ante congue lacinia nec eu est. In at nibh et justo mollis accumsan.",
        name: "Alice Johnson",
        avatar: "https://via.placeholder.com/150",
      },
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <h3>What Our Customers Say</h3>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}>
              <p className="testimonial-text">{testimonial.testimonial}</p>
              <hr className="testimonial-divider" />
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                <p className="author-name">{testimonial.name}</p>
              </div>
            </div>
          ))}
          <button className="prev-button" onClick={prevSlide}>Previous</button>
          <button className="next-button" onClick={nextSlide}>Next</button>
        </div>
      </div>
    );
  };
  
  export default TestimonialsSection;