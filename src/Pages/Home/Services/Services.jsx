import React, { useEffect, useState } from 'react';
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
            console.log(data);
          });
    },[])
    return (
      <div className="my-24">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="">
              <p className="text-orange-700 font-bold text-lg">Services</p>
              <h1 className="text-4xl font-bold">Our Service Area</h1>
              <p className="py-6 capitalize w-[717px]">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
          </div>
        </div>
        {/* Services Div */}
        <div className="flex flex-wrap gap-3 mx-auto">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default Services;