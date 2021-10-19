import React from 'react';
import { Carousel } from 'react-bootstrap';

/*<-----Image Located From Local Storage-----> */
import banner01 from '../../images/banner/slider1st.jpg'
import banner02 from '../../images/banner/slider2nd.jpg'
import banner03 from '../../images/banner/slider3rd.jpg'
import banner04 from '../../images/banner/slider4th.jpg'

const Banner = () => {
    return (
        <div>

            {/* Caurosel For Sliding Banner with Local Storage Dynamically Show Picture */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner01}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner02}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner03}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner04}
                        alt="Fourth slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;