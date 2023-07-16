import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import BookingCard from './BookingCard/BookingCard';
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        // 'content-type': 'application.json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      // body: JSON.stringify(authorization),
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
         setBookings(data);
        }
        else{
          navigate('/')
        }
      })
  }, [url, navigate])

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
            if (data.deletedCount > 0) {
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

  const handleUpdate = (_id) => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ status: 'confirm' }),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.modifiedCount > 0){
            const remaining = bookings.filter((booking) => booking._id !== _id);
            const updated = bookings.find((booking) => booking._id === _id);
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
            console.log(data);
            Swal.fire('Saved!', '', 'success');
            }
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
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
          handleUpdate={handleUpdate}
        ></BookingCard>
      ))}
    </div>
  );
};

export default Bookings;
