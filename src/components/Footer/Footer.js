import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-container text-start">
 
                                {/* Copyright Text Here */}
                                <p className="mt-3">
                                    <small className="fw-bold">Shakti Medi Pharma © . All Rights Reserved | 2021.</small>
                                </p>
                            </div>
                        </div>

                        {/* Contact Here */}
                        <div className="col-md-6">
                            <div className="right-footer-container d-flex justify-content-end">
                                <div className=" ">
                                    <div>
                                        <h5>+880 1900 000 001</h5>
                                        <p>
                                            Mirpur-11, Extension Pallabi
                                            <br />
                                            Mirpur, Dhaka 1216, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;