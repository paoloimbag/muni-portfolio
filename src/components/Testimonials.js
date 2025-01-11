import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonialsRef = useRef(null);
  const isInView = useInView(testimonialsRef);

  const testimonials = [
    {
      quote: "Paolo's eye for design and attention to detail transformed our product. His ability to understand our vision and translate it into a beautiful, functional design was exceptional.",
      author: "Sarah Chen",
      role: "Product Lead, Pilothouse Digital",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "Working with Paolo was a game-changer for our brand. His understanding of both design and user experience helped us create a product that our customers love.",
      author: "Michael Ross",
      role: "CEO, Oddup",
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "Paolo brings both creativity and strategic thinking to every project. His work on our platform significantly improved user engagement and satisfaction.",
      author: "Emma Thompson",
      role: "Creative Director, iStack",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section className="testimonials">
      <div 
        ref={testimonialsRef}
        className="testimonials-container"
      >
        <h2 className="section-title">Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${isInView ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="quote-mark">"</div>
              <p className="quote">{testimonial.quote}</p>
              <div className="author-info">
                <img src={testimonial.image} alt={testimonial.author} />
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 