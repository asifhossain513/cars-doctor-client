import React, { useContext } from 'react';
import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
    const loadedService = useLoaderData();
    const {user} = useContext(AuthContext)
    const {title, _id, price, img, } = loadedService;
    console.log(loadedService);
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const note = form.note.value;
        const date = form.date.value;
        const orderDetails = {
          productName,
          email,
          phone,
          note,
          service: _id,
          price: price,
          img,
          title,
          date,
        };
        console.log(orderDetails)
        fetch('https://cars-doctor-server-alpha.vercel.app/checkout', {
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
                className="input input-bordered"
                name="productName"
                defaultValue={title}
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
                defaultValue={user.email}
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