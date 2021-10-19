import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';


const Details = () => {
    const { serviceId } = useParams();

    /*<----- UseState For Hook Callback Service */
    const [service, setService] = useState({});

    /*<----- UseEffect For Data Fetching To JSON File-----> */
    useEffect(() => {
        fetch('/shaktimedipharma.json')
            .then(res => res.json())
            .then(data => {
                /*<----- Data Finding For While After Login & toSting 
                For Show Details Data-----> */
                const foundService = data.find(service => service.id.toString() === serviceId)
                setService(foundService);
                console.log(foundService);
            })
    }, [serviceId]);


    return (
        <div>
            <div>
                {/* Optional Chainning For Service Details */}
                <div className="card mx-auto mb-5 mt-5">
                    <img src={service?.img} className="details-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-info">{service?.name}</h5>
                        <p className="card-text">{service?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;