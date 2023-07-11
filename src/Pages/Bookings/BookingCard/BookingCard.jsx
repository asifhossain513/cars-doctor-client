import React from 'react';
import { HiX } from 'react-icons/hi';

const BookingCard = ({ booking, handleRemoveBooking }) => {
  const { img, price, title, date, _id } = booking;

  return (
    <table className="table">
      {/* head */}
      <tbody className="bg-slate-300 ">
        {/* row 1 */}
        <tr className="">
          <td>
            <button
              className="btn btn-ghost"
              onClick={() => handleRemoveBooking(_id)}
            >
              <HiX className="w-7 h-7"></HiX>
            </button>
          </td>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask  w-16 h-16">
                  <img
                    src={img}
                    className="rounded-md"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="text-sm opacity-50">
                  <p className="font-bold text-xl">{title}</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <p className="font-bold">{price}</p>
          </td>
          <td>
            <p className="font-bold">{date}</p>
          </td>
          <th>
            <button className="btn btn-warning btn-xs">Pending</button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default BookingCard;