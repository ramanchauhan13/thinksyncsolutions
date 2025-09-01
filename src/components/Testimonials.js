'use client';

import { Quote } from "lucide-react";
import { testimonials } from "./data";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 relative bg-[url('/back.png')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div
        className="relative container mx-auto px-6"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-blue-700 to-gray-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We’re proud to build long-lasting partnerships with our clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-900/30 backdrop-blur-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-blue-500 opacity-80 group-hover:rotate-6 transition-transform duration-500" />
              </div>

              {/* Feedback */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{testimonial.feedback}”
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover"
                /> */}
                <div>
                  <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
