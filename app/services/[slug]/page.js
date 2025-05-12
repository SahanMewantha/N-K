"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation'
import services from '../../data/services'

const ServiceDetails = () => {
    const searchParams = useSearchParams();
    const titleParam = searchParams.get('title');
    const service = services.find((s) => s.title === titleParam);

    if (!services){
      return (
      <div className="p-10 text-white">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="mt-2">We couldn’t find a service with that title.</p>
      </div>
    );
    }
  return (
  <div className="min-h-screen p-10 bg-black text-white">
    <h1 className="text-3xl font-bold text-[#58A6FF] mb-4 mt-10">{service.title}</h1>
    <p className="text-lg text-white/90">{service.description}</p>

    {service.servicesIncluded && service.servicesIncluded.length > 0 && (
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-[#58A6FF] mb-2">Services Included:</h2>
        <ul className="list-disc list-inside space-y-1 text-white/80">
          {service.servicesIncluded.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
}

export default ServiceDetails
