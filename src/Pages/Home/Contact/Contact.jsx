import React from 'react';
import { HiCalendar, HiPhoneOutgoing, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
    return (
      <div className=" items-center p-6 rounded-lg flex bg-black justify-between h-[250px]">
        <div className="flex text-white items-center gap-3 ml-6">
          <div>
            <HiCalendar className="w-8 h-8 text-white"></HiCalendar>
          </div>
          <div>
            <p className="text-md ">We are open monday-friday</p>
            <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
          </div>
        </div>

        <div className="flex text-white items-center gap-3 ">
          <div>
            <HiPhoneOutgoing className="w-8 h-8 text-white"></HiPhoneOutgoing>
          </div>
          <div>
            <p className="text-md ">Have a question?</p>
            <h1 className="text-2xl font-bold">+2546 251 2658</h1>
          </div>
        </div>

        <div className="flex text-white items-center gap-3  mr-6">
          <div>
            <HiLocationMarker className="w-8 h-8 text-white"></HiLocationMarker>
          </div>
          <div>
            <p className="text-md ">Need a repair? our address</p>
            <h1 className="text-2xl font-bold">Liza Street, New York</h1>
          </div>
        </div>
      </div>
    );
};

export default Contact;