import React from 'react';
import '../css/home.css'

const dog = require('../../images/dog.png')
const logo1 = require('../../images/1.png')
const logo2 = require('../../images/2.png')
const logo3 = require('../../images/3.png')


export default function Home({children}) {
    return (
        <div className="main_container">
            <div className="bradcam_area breadcam_bg pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 mt-5">
                            <div className="bradcam_text text-center">
                                <h3 className="display-2 text-light">
                                    We Care <br />
                                </h3>
                                <h1 className="display3 text-light fw-bold">
                                    Your Pets
                                </h1>
                                <p className="text-white">
                                    Create a free lost or found pet listing that
                                    is emailed faxed to over 25 local shelters,
                                    vets and rescue groups.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-9">
                            <div className="dog_thumb dog_area d-none d-lg-block">
                                <img
                                    src={dog}
                                    alt="dog"
                                    style={{ height: "550px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row mx-0">
                    <h3
                        className="display-4 text-dark text-center"
                        id="home-title"
                    >
                        How it works <br />
                    </h3>

                    <div className="container d-flex justify-content-between">
                        <div
                            className="card"
                            style={{ width: "20rem", height: "350px" }}
                        >
                            <div className="card-body">
                                <img
                                    className="card-img-top mx-auto d-block mt-3"
                                    src={logo1}
                                    alt="logo1"
                                    style={{ width: "75px" }}
                                />
                            </div>

                            <div className="card-body ">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Speak with neighbors, postal carriers and
                                    landscapers about your missing pet. Put your
                                    lost pet flyer in local vet offices and
                                    other community establishments.
                                </p>
                            </div>
                        </div>

                        <div
                            className="card"
                            style={{ width: "20rem", height: "350px" }}
                        >
                            <div className="card-body">
                                <img
                                    className="card-img-top mx-auto d-block mt-3"
                                    src={logo2}
                                    alt="logo1"
                                    style={{ width: "100px" }}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Upload a picture of your lost pet, search
                                    the Petco Love Lost database, then sign up
                                    to receive alerts about your pet and create
                                    a lost pet flyer.
                                </p>
                            </div>
                        </div>

                        <div
                            className="card"
                            style={{ width: "20rem", height: "350px" }}
                        >
                            <div className="card-body">
                                <img
                                    className="card-img-top mx-auto d-block mt-3"
                                    src={logo3}
                                    alt="logo1"
                                    style={{ width: "100px" }}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    While most shelters are listing found pets
                                    on Petco Love Lost, we cannot guarantee that
                                    every shelter in your area participates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}
