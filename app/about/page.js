import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";

// Reusable SVG components to reduce DOM size
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Feature card component
const FeatureCard = ({ icon, text }) => (
  <div className="bg-[#444444] p-4 rounded-lg flex items-center gap-3 w-48">
    <div className="bg-[#58A6FF] rounded-full p-2">
      {icon}
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

// Expert card component
const ExpertCard = ({ imageSrc, title, description, features }) => (
  <div className="bg-[#292929] rounded-lg shadow-lg overflow-hidden border border-[#444444]">
    <div className="relative h-64">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#58A6FF] mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-[#FFEB3B] font-bold">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Team quality item component
const TeamQualityItem = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <div className="bg-[#58A6FF] rounded-full p-2 mt-1 flex-shrink-0">
      <ShieldIcon />
    </div>
    <div>
      <h4 className="font-bold text-[#58A6FF]">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const About = () => {
  const features = [
    { icon: <CheckIcon />, text: "Eco-Friendly" },
    { icon: <ClockIcon />, text: "Time-Efficient" },
    { icon: <ShieldIcon />, text: "Fully Insured" }
  ];

  const expertCards = [
    {
      imageSrc: "/expert-1.jpg",
      title: "Professional Training",
      description: "Our experts undergo rigorous training in the latest cleaning techniques and use of eco-friendly products to ensure exceptional results.",
      features: ["Certified Techniques", "Continuous Education"]
    },
    {
      imageSrc: "/expert-2.jpg",
      title: "Trusted & Verified",
      description: "Security and trust are our priorities. All team members undergo thorough background checks and in-person interviews.",
      features: ["Reference Checked", "Interviewed In-Person"]
    },
    {
      imageSrc: "/expert-3.jpg",
      title: "Insured & Protected",
      description: "For your peace of mind, our team is fully insured and bonded, providing protection for both your property and our staff.",
      features: ["Insured & Bonded", "Liability Coverage"]
    }
  ];

  const teamQualities = [
    { title: "Experienced & Professional", description: "Minimum 3 years of professional cleaning experience" },
    { title: "Reference Checked", description: "Multiple professional references verified" },
    { title: "Interviewed In-Person", description: "Rigorous personal and professional assessment" },
    { title: "Honest and Dependable", description: "Trustworthy team you can rely on consistently" },
    { title: "Insured & Bonded", description: "Complete protection for your property" },
    { title: "Trustworthy", description: "Background-checked and personally vetted" }
  ];

  return (
    <>
      {/* Add metadata for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "CleaningService",
              "name": "N&K Spotless Solutions",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Nicole Kim"
              },
              "description": "Professional cleaning services provider specializing in residential and commercial cleaning with eco-friendly products and techniques."
            }
          })
        }}
      />

      <section
        id="about"
        className="min-h-screen bg-[#333333] py-16 text-white"
      >
        {/* Hero Section - Critical for FCP */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#232f8e] to-[#58A6FF] rounded-bl-full h-96"></div>
          <div className="container mx-auto px-4 relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white pt-16 text-center">
              About N&K Spotless Solutions
            </h1>
            <div className="w-32 h-1 bg-[#FFEB3B] mx-auto rounded-full my-6" aria-hidden="true" />
            <p className="text-lg md:text-xl text-white text-center max-w-3xl mx-auto">
              Your trusted partner for exceptional cleaning services since 2024
            </p>
          </div>
        </div>

        {/* Company Journey Section */}
        <div className="container mx-auto px-4 mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#58A6FF] mb-6 flex relative">Our Journey</h2>
              <div className="w-24 h-1 bg-[#FFEB3B] rounded-full mb-6" aria-hidden="true" />
              <p className="text-base md:text-lg mb-6">
                N&K Spotless Solutions was founded in 2024 with the goal of providing
                top-notch cleaning services to homes and businesses. Our team is dedicated
                to creating spotless environments using environmentally friendly products
                and advanced cleaning techniques.
              </p>
              <p className="text-base md:text-lg mb-6">
                Whether you need a deep clean or regular maintenance, we strive to exceed 
                your expectations with every service. We believe in transparency, reliability,
                and uncompromising quality.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} icon={feature.icon} text={feature.text} />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/about-journey.jpg"
                    alt="Our Cleaning Journey"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority // Important for LCP
                  />
                </div>
                <div className="absolute -bottom-16 -left-16 w-64 aspect-[4/3] hidden lg:block">
                  <Image
                    src="/about-detail.jpg"
                    alt="Cleaning Detail"
                    fill
                    className="rounded-lg shadow-xl border-4 border-[#333333] object-cover"
                    sizes="256px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Section */}
        <div className="bg-[#292929] mt-32 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/3">
                <div className="relative">
                  <div className="bg-[#232f8e] absolute top-0 left-0 w-full h-full rounded-lg opacity-60 transform -rotate-3"></div>
                  <div className="bg-[#FFEB3B] absolute top-0 left-0 w-full h-full rounded-lg opacity-30 transform rotate-3"></div>
                  <div className="relative z-10 aspect-[3/4] w-full">
                    <Image
                      src="/owner-portrait.jpg"
                      alt="Nicole Kim, Founder of N&K Spotless Solutions"
                      fill
                      className="rounded-lg shadow-lg object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-[#58A6FF] mb-6">A Word from Our Owner</h2>
                <div className="w-24 h-1 bg-[#FFEB3B] rounded-full mb-6" aria-hidden="true" />
                <div className="relative">
                  <svg className="absolute top-0 left-0 h-12 w-12 text-[#58A6FF] opacity-20 transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="space-y-4">
                    <p className="text-base md:text-lg italic pl-4">
                      "When I started N&K Spotless Solutions, I had one mission in mind: to deliver cleaning services that I would want for my own home. Our company was built on the foundation of trust, excellence, and attention to detail."
                    </p>
                    <p className="text-base md:text-lg italic pl-4">
                      "What sets us apart is our commitment to treating your space as if it were our own. We understand that inviting someone into your home or business requires trust, and we honor that trust by delivering results that exceed expectations."
                    </p>
                    <p className="text-base md:text-lg italic pl-4">
                      "Our team is carefully selected, thoroughly vetted, and continuously trained to ensure that when you choose N&K Spotless Solutions, you're getting the very best in the industry."
                    </p>
                    <cite className="text-xl font-bold text-[#58A6FF] pl-4 not-italic">— Nicole Kim, Founder</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experts Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#58A6FF] mb-6">Our Cleaning Experts</h2>
            <div className="w-32 h-1 bg-[#FFEB3B] mx-auto rounded-full mb-6" aria-hidden="true" />
            <p className="text-base md:text-lg max-w-3xl mx-auto">
              At N&K Spotless Solutions, we assure you that we have hired the best and most
              suitable team to help you achieve your desired outcome. Every single one
              of our teammates is friendly, experienced, and, most importantly,
              trustworthy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertCards.map((card, index) => (
              <ExpertCard key={index} {...card} />
            ))}
          </div>
          
          {/* Expert Qualities Summary */}
          <div className="mt-16 bg-[#292929] rounded-lg p-8 shadow-lg border border-[#444444]">
            <h3 className="text-2xl font-bold text-[#58A6FF] mb-6 text-center">
              Why Our Team Stands Out
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamQualities.map((quality, index) => (
                <TeamQualityItem key={index} {...quality} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#232f8e] to-[#58A6FF] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Experience the N&K Spotless Difference?
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
              Let our expert team transform your space into a clean, healthy environment you'll love.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#FFEB3B] hover:bg-yellow-500 text-[#333333] font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Book Your Cleaning Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;