import React from 'react';
import ContainerComponentGet from '../hocs/ContainerComponentGet.js';
import PageSlides from './PageSlides.js';
import ContactUs from './ContactUs.js';
import PageFooter from './PageFooter.js'
import '../css/home.css'

const dog = require('../../images/dog.png')
const logo1 = require('../../images/1.png')
const logo2 = require('../../images/2.png')
const logo3 = require('../../images/3.png')


export default function Home({children}) {
    return (
        <div className="home_container">
            <div className="bradcam_area breadcam_bg pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 mt-5">
                            <div className="bradcam_text text-center">
                                <h4 className="display-2 text-light">
                                    We Care
                                </h4>
                                <h1 className="display3 text-light fw-bold">
                                    Your Pets
                                </h1>
                                <br />
                                <br />
                                <p className="text-white">
                                    Create a free lost or found pet listing that
                                    is emailed faxed to over 25 local shelters,
                                    vets and rescue groups.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8">
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

                    <div className="container d-flex justify-content-between mt-4">
                        <div
                            className="card"
                            style={{
                                width: "20rem",
                                height: "350px",
                                borderRadius: "25px",
                            }}
                        >
                            <div className="card-body">
                                <div id="home-card">
                                    <img
                                        className="card-img-top mx-auto d-block mt-3"
                                        src={logo1}
                                        alt="logo1"
                                        style={{ width: "75px" }}
                                    />
                                </div>
                            </div>

                            <div className="card-body ">
                                <h5 className="card-title text-center fs-5 fw-bold">
                                    FREE LISTING
                                </h5>
                                <p className="text-center">
                                    Speak with neighbors, about your missing
                                    pet. Put your lost pet flyer in local vet
                                    offices and other community establishments.
                                </p>
                            </div>
                        </div>

                        <div
                            className="card"
                            style={{
                                width: "20rem",
                                height: "350px",
                                borderRadius: "25px",
                            }}
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
                                <h5 className="text-center fs-5 fw-bold">
                                    FLYER GENERATOR
                                </h5>
                                <p className="text-center">
                                    Create a lost or found pet flyer with all
                                    pertinent information will make it easy to
                                    help tracking down your pet.
                                </p>
                            </div>
                        </div>

                        <div
                            className="card"
                            style={{
                                width: "20rem",
                                height: "350px",
                                borderRadius: "25px",
                            }}
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
                                <h5 className="text-center fs-3">Reunite</h5>
                                <p className="text-center">
                                    Help reuniting lost pets by placing lost and
                                    found pet flyers in your neghbourhood. Get
                                    your pet home sooner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContainerComponentGet path="api/listing_infos/sample">
                <PageSlides />
            </ContainerComponentGet>

            <ContactUs />
            <PageFooter />
            {children}
        </div>
    );
}
