// components/testimonial.tsx
import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/testimonial.css';

const testimonials = [
  {
    name: "Lorem Ipsum One",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png",
  },
  {
    name: "Lorem Ipsum Two",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png",
  },
  {
    name: "Lorem Ipsum Three",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png",
  },
  {
    name: "Lorem Ipsum Four",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/person.png",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonialSection">
      {/* Heading Section */}
      <div className="testimonialHeading">
        <h5>Testimonials</h5>
        <h2>Trusted by Creators</h2>
        <p>Real Stories, Real Protection</p>
      </div>

      {/* Customer Count Section */}
      <div className="customerCountSection">
        <div className="customerCount">
          <Image 
            src="/images/people-icon.svg" 
            alt="Happy customers" 
            width={315} 
            height={52} 
          />
        </div>
      </div>

      {/* Swiper Testimonial Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={-40}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        loop={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonialCard">
              <p className="testimonialText">"{testimonial.text}"</p>
              <div className="testimonialAuthor">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="authorImage"
                />
                <div className="authorInfo">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Testimonial;