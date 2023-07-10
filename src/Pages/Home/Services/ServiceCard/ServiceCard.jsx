import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, price, img, title } = service;
//   const handleDetailsService = _id => {
//     console.log('id:', _id)
//   }
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-2">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex flex-row">
          <p className="text-1xl font-bold text-orange-700">Price: $ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
