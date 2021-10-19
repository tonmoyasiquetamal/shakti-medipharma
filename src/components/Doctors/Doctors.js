import React from 'react';
import './Doctors.css'

/*<-----Doctors Image Showing From Local Storage-----> */
import doctors1st from '../../images/doctors/doctors1st.png'
import doctors2nd from '../../images/doctors/doctors2nd.png'
import doctors3rd from '../../images/doctors/doctors3rd.png'
import doctors4th from '../../images/doctors/doctors4th.png'
import doctors5th from '../../images/doctors/doctors5th.png'
import doctors6th from '../../images/doctors/doctors6th.png'

const Doctors = () => {
    return (
        <>
            <div className='mt-5'>
                <h1 className="text-center text-success">Here Is Our Specialized Doctors</h1>
            </div>

            {/* Doctors Image with Local Storage Dynamically Show Picture */}
            <div className='doctors-container'>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    <div className="col">
                        <div className="card">
                            <img src={doctors1st} className="card-img-top doctor-image" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pro. Dr. Mr. Suhaib Khan</h5>
                                <p className="card-text">M.B.B.S In PhysioTherapy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={doctors2nd} className="card-img-top doctor-image" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Ms. Lipi Saha</h5>
                                <p className="card-text">P.HD In Speech Therapist .</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={doctors3rd} className="card-img-top doctor-image" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Ms. Fatema Johra</h5>
                                <p className="card-text">M.Sc In Cardiac</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={doctors4th} className="card-img-top doctor-image" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Mr. Imtiaz Ahmed</h5>
                                <p className="card-text">
                                    Child Care Specalist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={doctors5th} className="card-img-top doctor-image" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Mr. Stephan Davies</h5>
                                <p className="card-text">F.C.P.S In Gynocology Surgery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={doctors6th} className="card-img-top doctor-image" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pro. Dr. Ms. Sakshi Roy</h5>
                                <p className="card-text">B.Sc In Psycologist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Doctors;