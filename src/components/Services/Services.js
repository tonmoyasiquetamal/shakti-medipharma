import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {

        /*<-----Fetching Data For Overall Services Data
         While User Click Also Single Data-----> */
        fetch('shaktimedipharma.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <>
            <div className="mb-5">
                <h2 className='text-primary mt-5 text-center '>We Provide Our Best Services</h2>
            </div>
            <div className='services-container' id='services'>

{/* Key Mapping For After Login Service Data Show Error */}
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;