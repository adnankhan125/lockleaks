// components/testimonial.js
import { useState } from 'react';
import Image from 'next/image';
import '../styles/testimonial.css';  // Import the global CSS file

const testimonials = [
  {
    name: "Lorem Ipsum One",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png", // Path to image, replace with actual image URL
  },
  {
    name: "Lorem Ipsum Two",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png", // Path to image, replace with actual image URL
  },
  {
    name: "Lorem Ipsum Three",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png", // Path to image, replace with actual image URL
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonialSection">
      {/* Heading Section */}
      <div className="heading">
        <h2>Trusted by Creators</h2>
        <p>Real Stories, Real Protection</p>
      </div>

      {/* Customer Count Section */}
      <div className="customerCountSection">
      <Image 
            src="/images/people-icon.png" 
            alt="Happy customers" 
            width={315} 
            height={52} 
          />
      </div>

      {/* Testimonial Slider */}
      <div className="slider">
        <div className="testimonialCard">
          <p className="testimonialText">
            "{testimonials[currentIndex].text}"
          </p>
          <div className="testimonialAuthor">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={50}
              height={50}
              className="authorImage"
            />
            <div className="authorInfo">
              <h4>{testimonials[currentIndex].name}</h4>
              <p>{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation">
          <button onClick={prevTestimonial} className="navButton">←</button>
          <button onClick={nextTestimonial} className="navButton">→</button>
        </div>
      </div>

    </section>
  );
};

export default Testimonial;
