import React from 'react';
import team from '../../../assets/icons/group.svg'
import delivery from '../../../assets/icons/deliveryt.svg'
import check from '../../../assets/icons/check.svg'
import person from '../../../assets/icons/person.svg'
import wrench from '../../../assets/icons/Wrench.svg'
import clock from '../../../assets/icons/Group 38729.svg'
const WhyUs = () => {
    return (
      <div className="my-24">
        <div className="hero ">
          <div className="hero-content text-center">
            <div className="">
              <p className="text-orange-700 font-bold text-lg">Core Features</p>
              <h1 className="text-4xl font-bold">Why Choose Us</h1>
              <p className="py-6 capitalize w-[717px]">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 mt-5 justify-center">
          <div className="card w-[170px] h-[151px] bg-base-100 border border-1 border-black-100">
            <div className="mx-auto pt-6">
              <img src={team} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="text-center mt-2 m-auto">
              <h2 className="card-title">Expert Team</h2>
            </div>
          </div>
          <div className="card w-[170px] h-[151px] text-white border border-1 border-black-100 bg-orange-500">
            <div className="mx-auto pt-6">
              <img src={clock} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="text-center mt-2 m-auto">
              <h2 className="card-title">Timely Delivery</h2>
            </div>
          </div>
          <div className="card w-[170px] h-[151px] bg-base-100 border border-1 border-black-100">
            <div className="mx-auto pt-6">
              <img src={person} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="text-center mt-2 m-auto">
              <h2 className="card-title">24/7 Support</h2>
            </div>
          </div>
          <div className="card w-[170px] h-[151px] bg-base-100 border border-1 border-black-100">
            <div className="mx-auto pt-6">
              <img src={wrench} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="text-center mt-2 m-auto">
              <h2 className="card-title">Best Equipment</h2>
            </div>
          </div>
          <div className="card w-[170px] h-[151px] bg-base-100 border border-1 border-black-100">
            <div className="mx-auto pt-6">
              <img src={check} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="text-center mt-2 m-auto">
              <h2 className="card-title">100% Guranty</h2>
            </div>
          </div>
          <div className="card w-[170px] h-[151px] bg-base-100 border border-1 border-black-100">
            <div className="mx-auto pt-6">
              <img src={delivery} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="text-center mt-2 m-auto">
              <h2 className="card-title">Timely Delivery</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyUs;