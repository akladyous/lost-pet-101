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
        formTitle
    } = props || {};


    const handleChange = (e, table_name) => {
        e.preventDefault();
        const currentVaue = { [e.currentTarget.name]: e.currentTarget.value };
        updateFormData(table_name, currentVaue);
    };

    return (
        <div className="card h-100" id="card-container">

            <div className="card-header" id='card-container-header'>
                {formTitle}
            </div>

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
                                    onChange={(e) => {
                                        handleChange(e, "listingInfo");
                                    }}
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
                                    onChange={(e) =>{
                                        handleChange(e, "listingInfo");
                                    }}
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
                                    value={formData.listing.date_lost_found}
                                    onChange={(e) =>{
                                        handleChange(e, 'listing')
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Message
                            </label>
                            <div className="col-8">
                                <textarea
                                    rows="7"
                                    name="msg_from"
                                    className="form-control"
                                    value={formData.listing.msg_from}
                                    onChange={(e) =>{
                                        handleChange(e, 'listing')
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Description
                            </label>
                            <div className="col-8">
                                <textarea
                                    rows="7"
                                    name="description"
                                    className="form-control"
                                    value={formData.listing.description}
                                    onChange={(e) =>{
                                        handleChange(e, 'listing')
                                    }}
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