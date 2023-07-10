import React from 'react';
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const loadedService = useLoaderData();
    const {title, _id, price} = loadedService;
    console.log(loadedService);
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const note = form.note.value;
        const orderDetails = {
            name,
            email,
            phone,
            note,
            service: _id,
            price: price,
        };
        console.log(orderDetails)
        fetch('http://localhost:5000/checkout', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(orderDetails),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
              alert('Service booked successfully')
            }
          });
    }
    return (
      <div className="hero min-h-screen bg-base-200 rounded-md">
        <form className="card shadow-2xl w-2/3" onSubmit={handleOrder}>
          <div className="card-body grid grid-cols-2 space-y-2 items-center">
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                placeholder="Enter your last name"
                className="input input-bordered"
                name="date"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Enter your Phone Number"
                className="input input-bordered"
                name="phone"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control col-span-2">
              <textarea
                placeholder="Write Your message"
                className="h-52 px-4 py-2"
                name="note"
              ></textarea>
            </div>

            <div className="form-control mt-6 w-100 col-span-2">
              <input
                type="submit"
                value="Confirm Order"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
};

export default CheckOut;