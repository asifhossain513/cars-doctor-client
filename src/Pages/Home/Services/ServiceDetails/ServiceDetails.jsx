import React, { useEffect } from 'react';

const ServiceDetails = () => {
    useEffect(()=> {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => console.log(data));
    },[])
    return (
        <div>
            <h1>ServiceDetails</h1>
        </div>
    );
};

export default ServiceDetails;