import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#333333] py-16 text-white"
    >
      {/* Hero Section with Curved Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#232f8e] to-[#58A6FF] rounded-bl-full h-96 "></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-white pt-16 text-center">About N&K Spotless Solutions</h1>
          <div className="w-32 h-1 bg-[#FFEB3B] mx-auto rounded-full my-6" />
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Your trusted partner for exceptional cleaning services since 2024
          </p>
        </div>
      </div>

      {/* Company Journey Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#58A6FF] mb-6 flex relative">Our Journey</h2>
            <div className="w-24 h-1 bg-[#FFEB3B] rounded-full mb-6" />
            <p className="text-lg mb-6">
              N&K Spotless Solutions was founded in 2024 with the goal of providing
              top-notch cleaning services to homes and businesses. Our team is dedicated
              to creating spotless environments using environmentally friendly products
              and advanced cleaning techniques.
            </p>
            <p className="text-lg mb-6">
              Whether you need a deep clean or regular maintenance, we strive to exceed 
              your expectations with every service. We believe in transparency, reliability,
              and uncompromising quality.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-[#444444] p-4 rounded-lg flex items-center gap-3 w-48">
                <div className="bg-[#58A6FF] rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Eco-Friendly</span>
              </div>
              <div className="bg-[#444444] p-4 rounded-lg flex items-center gap-3 w-48">
                <div className="bg-[#58A6FF] rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Time-Efficient</span>
              </div>
              <div className="bg-[#444444] p-4 rounded-lg flex items-center gap-3 w-48">
                <div className="bg-[#58A6FF] rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium">Fully Insured</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="/about-journey.jpg" // Main image
                alt="Our Cleaning Journey"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <img
                src="/about-detail.jpg" // Secondary image
                alt="Cleaning Detail"
                className="absolute -bottom-16 -left-16 w-64 h-auto rounded-lg shadow-xl border-4 border-[#333333] hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* A Word from Owner Section */}
      <div className="bg-[#292929] mt-32 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <div className="bg-[#232f8e] absolute top-0 left-0 w-full h-full rounded-lg opacity-60 transform -rotate-3"></div>
                <div className="bg-[#FFEB3B] absolute top-0 left-0 w-full h-full rounded-lg opacity-30 transform rotate-3"></div>
                <img
                  src="/owner-portrait.jpg" // Owner image
                  alt="Company Owner"
                  className="relative z-10 w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <h2 className="text-4xl font-bold text-[#58A6FF] mb-6">A Word from Our Owner</h2>
              <div className="w-24 h-1 bg-[#FFEB3B] rounded-full mb-6" />
              <div className="relative">
                <svg className="absolute top-0 left-0 h-12 w-12 text-[#58A6FF] opacity-20 transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg italic mb-6 pl-4">
                  "When I started N&K Spotless Solutions, I had one mission in mind: to deliver cleaning services that I would want for my own home. Our company was built on the foundation of trust, excellence, and attention to detail.
                </p>
                <p className="text-lg italic mb-6 pl-4">
                  What sets us apart is our commitment to treating your space as if it were our own. We understand that inviting someone into your home or business requires trust, and we honor that trust by delivering results that exceed expectations.
                </p>
                <p className="text-lg italic mb-6 pl-4">
                  Our team is carefully selected, thoroughly vetted, and continuously trained to ensure that when you choose N&K Spotless Solutions, you're getting the very best in the industry."
                </p>
                <p className="text-xl font-bold text-[#58A6FF] pl-4">— Nicole Kim, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Cleaning Experts Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#58A6FF] mb-6">Our Cleaning Experts</h2>
          <div className="w-32 h-1 bg-[#FFEB3B] mx-auto rounded-full mb-6" />
          <p className="text-lg max-w-3xl mx-auto">
            At N&K Spotless Solutions, we assure you that we have hired the best and most
            suitable team to help you achieve your desired outcome. Every single one
            of our teammates is friendly, experienced, and, most importantly,
            trustworthy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expert Card 1 */}
          <div className="bg-[#292929] rounded-lg shadow-lg overflow-hidden border border-[#444444]">
            <img 
              src="/expert-1.jpg" 
              alt="Cleaning Expert" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#58A6FF] mb-2">Professional Training</h3>
              <p className="mb-4">
                Our experts undergo rigorous training in the latest cleaning techniques and use of eco-friendly products to ensure exceptional results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#FFEB3B] font-bold">✓</span> Certified Techniques
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFEB3B] font-bold">✓</span> Continuous Education
                </li>
              </ul>
            </div>
          </div>
          
          {/* Expert Card 2 */}
          <div className="bg-[#292929] rounded-lg shadow-lg overflow-hidden border border-[#444444]">
            <img 
              src="/expert-2.jpg" 
              alt="Cleaning Expert" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#58A6FF] mb-2">Trusted & Verified</h3>
              <p className="mb-4">
                Security and trust are our priorities. All team members undergo thorough background checks and in-person interviews.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#FFEB3B] font-bold">✓</span> Reference Checked
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFEB3B] font-bold">✓</span> Interviewed In-Person
                </li>
              </ul>
            </div>
          </div>
          
          {/* Expert Card 3 */}
          <div className="bg-[#292929] rounded-lg shadow-lg overflow-hidden border border-[#444444]">
            <img 
              src="/expert-3.jpg" 
              alt="Cleaning Expert" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#58A6FF] mb-2">Insured & Protected</h3>
              <p className="mb-4">
                For your peace of mind, our team is fully insured and bonded, providing protection for both your property and our staff.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#FFEB3B] font-bold">✓</span> Insured & Bonded
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFEB3B] font-bold">✓</span> Liability Coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Expert Qualities Summary */}
        <div className="mt-16 bg-[#292929] rounded-lg p-8 shadow-lg border border-[#444444]">
          <h3 className="text-2xl font-bold text-[#58A6FF] mb-6 text-center">
            Why Our Team Stands Out
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#58A6FF] rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#58A6FF]">Experienced & Professional</h4>
                <p className="text-sm">Minimum 3 years of professional cleaning experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#58A6FF] rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#58A6FF]">Reference Checked</h4>
                <p className="text-sm">Multiple professional references verified</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#58A6FF] rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#58A6FF]">Interviewed In-Person</h4>
                <p className="text-sm">Rigorous personal and professional assessment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#58A6FF] rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#58A6FF]">Honest and Dependable</h4>
                <p className="text-sm">Trustworthy team you can rely on consistently</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#58A6FF] rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#58A6FF]">Insured & Bonded</h4>
                <p className="text-sm">Complete protection for your property</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#58A6FF] rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#58A6FF]">Trustworthy</h4>
                <p className="text-sm">Background-checked and personally vetted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#232f8e] to-[#58A6FF] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the N&K Spotless Difference?</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Let our expert team transform your space into a clean, healthy environment you'll love.
          </p>
          <button className="bg-[#FFEB3B] hover:bg-yellow-500 text-[#333333] font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Book Your Cleaning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;