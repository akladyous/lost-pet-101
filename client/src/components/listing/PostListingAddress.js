import React, {useState} from 'react';
import { wrapper } from '../hocs/wrapper.js';
import FormButtons from '../layout/FormButtons.js';

const ControlButtons = wrapper(FormButtons);
export default function PostListingAddress(props) {
    const {
        currentIndex,
        lastIndex,
        nextStep,
        prevStep,
        formData,
        updateFormData,
    } = props || {};

    // const setCurrentValue = (e) => {
    //     const currentVaue = { [e.currentTarget.name]: e.currentTarget.value };
    //     setListingAddress((petData) => ({
    //         ...petData,
    //         ...currentVaue,
    //     }));
    // };
    const handleChange = (e) => {
        e.preventDefault();
        const currentVaue = { [e.currentTarget.name]: e.currentTarget.value };
        updateFormData("listingAddress", currentVaue);
    };

    const handleForm = (e) => {
        e.preventDefault();
        // console.log("ListingAddress Component -> ListingAddress : ",listingAddress);
        // goToNext(listingAddress);
    };


    return (
        <div className="card h-100" style={{ borderColor: "var(--orange)" }}>
            <div className="row w-100 h-100 mx-auto d-flex align-content-between">
                <div className="container px-4 py-2">
                    <form className="">
                        <div className="row mb-1">
                            <label
                                htmlFor="address1"
                                className="col-4 col-form-label fw-normal"
                            >
                                Address
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="address1"
                                    className="form-control"
                                    value={formData.listingAddress.address1}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label
                                htmlFor="address2"
                                className="col-4 col-form-label fw-normal"
                            >
                                Address
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="address2"
                                    className="form-control"
                                    value={formData.listingAddress.address2}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label
                                htmlFor="city"
                                className="col-4 col-form-label fw-normal"
                            >
                                City
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    value={formData.listingAddress.city}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label
                                htmlFor="zip_code"
                                className="col-4 col-form-label fw-normal"
                            >
                                Zip Code
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="zip_code"
                                    className="form-control"
                                    value={formData.listingAddress.zip_code}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label
                                htmlFor="state"
                                className="col-4 col-form-label fw-normal"
                            >
                                State
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="state"
                                    className="form-control"
                                    value={formData.listingAddress.state}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row m-1 p-1">
                    <ControlButtons
                        currentIndex={currentIndex}
                        lastIndex={lastIndex}
                        prevStep={prevStep}
                        nextStep={nextStep}
                    />
                </div>
            </div>
        </div>
    );
};