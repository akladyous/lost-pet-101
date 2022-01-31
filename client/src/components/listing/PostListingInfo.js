import React, {useState} from 'react';
import { wrapper } from '../hocs/wrapper.js';
import FormButtons from '../layout/FormButtons.js';

const ControlButtons = wrapper(FormButtons);
export default function PostListingInfo(props) {
    const {
        currentIndex,
        lastIndex,
        nextStep,
        prevStep,
        formData,
        updateFormData,
    } = props || {};


    const handleChange = (e) => {
        e.preventDefault();
        const currentVaue = { [e.currentTarget.name]: e.currentTarget.value };
        updateFormData("listingInfo", currentVaue);
    };


    const handleForm = (e) => {
        e.preventDefault();
        // console.log("ListingInfoComponent -> ListingInfo: ", listingInfo);
        // goToNext(listingInfo)
    };
    
    return (
        <div className="card h-100" style={{ borderColor: "var(--orange)" }}>
            <div className="row w-100 h-100 mx-auto d-flex align-content-between">
                <div className="container px-4 py-2">
                    <form className="">
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Listing Type
                            </label>
                            <div className="col-8">
                                <select
                                    name="listing_type"
                                    className="form-select"
                                    value={formData.listingInfo.listing_type}
                                    onChange={handleChange}
                                >
                                    <option value="">{""}</option>
                                    <option value="lost">LOST</option>
                                    <option value="found">FOUND</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Publication Date
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="published_at"
                                    className="form-control"
                                    value={formData.listingInfo.published_at}
                                    onChange={handleChange}
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Data last Seen
                            </label>
                            <div className="col-8">
                                <input
                                    type="date"
                                    name="date_lost_found"
                                    className="form-control"
                                    value={formData.listingInfo.date_lost_found}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Message
                            </label>
                            <div className="col-8">
                                <textarea
                                    rows="5"
                                    name="msg_from"
                                    className="form-control"
                                    value={formData.listingInfo.msg_from}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Description
                            </label>
                            <div className="col-8">
                                <textarea
                                    rows="5"
                                    name="description"
                                    className="form-control"
                                    value={formData.listingInfo.description}
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