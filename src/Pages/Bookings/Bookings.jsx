import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "./BookingCard/BookingCard";
import Swal from "sweetalert2";

const Bookings = () => {
    const {user} =useContext(AuthContext);
    const [bookings, setBookings] =useState([]);
    const url = `http://localhost:5000/checkout?email=${user?.email}`;

    useEffect(()=> {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setBookings(data));
    },[]);
        const handleRemoveBooking = (_id) => {
          console.log('Deleting', _id);

          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/bookings/${_id}`, {
                method: 'DELETE',
              })
                .then((res) => res.json())
                .then((data) => {
                  if(data.deletedCount > 0){
                  Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                  const remaining = bookings.filter(
                    (booking) => booking._id !== _id
                  );
                      setBookings(remaining);
                  }
                });
            }
          });
        };
    return (
      <div className="overflow-x-auto">
        <h1>Total Bookings {bookings.length}</h1>
        {bookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
            handleRemoveBooking={handleRemoveBooking}
          ></BookingCard>
        ))}
      </div>
    );
};

export default Bookings;