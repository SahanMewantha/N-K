"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import services from '../../data/services';

const ServiceDetails = () => {
  const searchParams = useSearchParams();
  const titleParam = searchParams.get('title');
  const service = services.find((s) => s.title === titleParam);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#454545] via-black to-[#262626] p-10 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-[#FFEB3B] mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-300 mb-6">We couldn't find a service with that title.</p>
          <Link href="/services" className="bg-[#58A6FF] hover:bg-[#FFEB3B] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center">
            <span>View All Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  // Dummy benefits for "Why Choose Us" section
  const benefits = [
    {
      title: "Experienced Professionals",
      description: "Our team consists of highly trained and experienced cleaning specialists who take pride in their work.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Eco-Friendly Products",
      description: "We use environmentally-friendly cleaning products that are safe for your family, pets, and the planet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied with our service, we'll come back and re-clean the areas at no additional cost.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your schedule to provide services when it's most convenient for you, including evenings and weekends.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#454545] via-black to-[#262626] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-black bg-opacity-50 rounded-xl p-8 shadow-lg mb-10 mt-12">
          <h2 className="text-3xl font-bold text-[#58A6FF] mb-6">{service.title}</h2>
          <div className="prose prose-lg text-white/90 mb-8">
            <p className="text-lg">{service.description}</p>
          </div>

          {service.servicesIncluded && service.servicesIncluded.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#58A6FF] mb-4">Services Included:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.servicesIncluded.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="text-[#FFEB3B] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-8">
            <Link href="/contact" className="bg-[#58A6FF] hover:bg-[#FFEB3B] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center">
              <span>Request a Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-black bg-opacity-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#FFEB3B] mb-10">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex">
                <div className="mr-4 text-[#58A6FF]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#58A6FF] mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-[#58A6FF] bg-opacity-10 border border-[#58A6FF] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FFEB3B] mb-2">Our Commitment</h3>
            <p className="text-white/90">
              At N&K Spotless Solutions, we're committed to providing exceptional cleaning services that exceed your expectations. 
              Our team is reliable, trustworthy, and dedicated to making your space sparkle. We understand that every client has unique needs, 
              which is why we offer customized cleaning solutions tailored to your specific requirements.
            </p>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-10 text-center">
          <blockquote className="italic text-xl text-white/80">
            "N&K Spotless Solutions transformed our office space. Their attention to detail and professional approach made all the difference. Highly recommended!"
          </blockquote>
          <p className="mt-4 text-[#FFEB3B] font-medium">— Sarah Johnson, Office Manager</p>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/contact" className="bg-[#58A6FF] hover:bg-[#FFEB3B] hover:text-black text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center">
            <span>Contact Us Today</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      
      <footer className="mt-12 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} N&K Spotless Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ServiceDetails;