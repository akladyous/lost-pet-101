import React, {useState} from 'react';
// import { wrapper } from '../hocs/wrapper.js';
// import FormButtons from '../layout/FormButtons.js';

// const ControlButtons = wrapper(FormButtons);

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
        <div className="card p-3">
            <div className="row">
                <div className="container">
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
                                    value={
                                        formData.listingAddress.address1
                                    }
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
                                    value={
                                        formData.listingAddress.address2
                                    }
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
                {/* ---------- */}
                <div className="container mt-2 px-1">
                    <div className="row">
                        <div className="col-2">
                            <div className="d-grid">
                                <button
                                    type="button"
                                    className="btn w-100"
                                    onClick={prevStep}
                                    disabled={currentIndex === 0}
                                    style={{
                                        backgroundColor: "hsl(25,100%,50%)",
                                    }}
                                >
                                    previous
                                </button>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="d-grid">
                                <button
                                    type="button"
                                    className="btn w-100"
                                    // disabled={currentIndex === steps.length -1}
                                    // disabled={currentIndex === lastIndex}
                                    onClick={nextStep}
                                    style={{
                                        backgroundColor: "hsl(25,100%,50%)",
                                    }}
                                >
                                    {currentIndex >= lastIndex
                                        ? "Submit"
                                        : "Next"}
                                </button>
                            </div>
                        </div>

                        <div className="col-6"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};