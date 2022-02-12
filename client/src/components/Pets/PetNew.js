import React from 'react';
import { wrapper } from '../hocs/wrapper.js';
import FormButtons from '../layout/FormButtons.js';

const ControlButtons = wrapper(FormButtons);


export default function PetNew(props) {
    const {
        loadImageFile, 
        currentIndex, 
        lastIndex, 
        nextStep, 
        prevStep,
        formData,
        updateFormData,
        formTitles,
    } = props || {}

    const loadImage = (e) => {
        e.preventDefault()
        // loadImageFile(e.currentTarget.files[0])
        loadImageFile(e)
    }

    const handleForm = (e) => {
        e.preventDefault();
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        const currentVaue = {[e.currentTarget.name]: e.currentTarget.value}
        updateFormData('pet', currentVaue)
    }

    return (
        <div className="card h-100 petContainer" id="card-container">
            <div className="card-header border-0" id="card-container-header">
                {formTitles}
            </div>

            <div className="row w-100 h-100 mx-auto d-flex align-content-between">
                <div className="container px-4 py-2">
                    <form className="bg-transparent">
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Name
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.pet.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Species
                            </label>
                            <div className="col-8">
                                {/* <input
                                    type="text"
                                    name="species"
                                    className="form-control"
                                    value={formData.pet.species}
                                    onChange={handleChange}
                                /> */}

                                <select
                                    name="species"
                                    className="form-select"
                                    value={formData.pet.species}
                                    onChange={handleChange}
                                >
                                    <option value="">{""}</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Age
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="age"
                                    className="form-control"
                                    value={formData.pet.age}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Size
                            </label>
                            <div className="col-8">
                                {/* <input
                                    type="text"
                                    name="size"
                                    className="form-control"
                                    value={formData.pet.size}
                                    onChange={handleChange}
                                /> */}
                                <select
                                    name="size"
                                    className="form-select"
                                    value={formData.pet.size}
                                    onChange={handleChange}
                                >
                                    <option value="">{""}</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Description
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    value={formData.pet.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Breed
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="breed"
                                    className="form-control"
                                    value={formData.pet.breed}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Gender
                            </label>
                            <div className="col-8">
                                <select
                                    name="gender"
                                    className="form-select"
                                    value={formData.pet.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">{""}</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Color
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="color"
                                    className="form-control"
                                    value={formData.pet.color}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Microchip
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="microchip"
                                    className="form-control"
                                    value={formData.pet.microchip}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Height
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="height"
                                    className="form-control"
                                    value={formData.pet.height}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Weight
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="weight"
                                    className="form-control"
                                    value={formData.pet.weight}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Coat
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="coat"
                                    className="form-control"
                                    value={formData.pet.coat}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Collar
                            </label>
                            <div className="col-8">
                                <select
                                    name="collar"
                                    className="form-select"
                                    value={formData.pet.collar}
                                    onChange={handleChange}
                                >
                                    <option value={null}>{""}</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label
                                htmlFor="image_file"
                                className="col-4 col-form-label fw-normal"
                            >
                                Upload image
                            </label>
                            <div className="col-8">
                                <input
                                    type="file"
                                    name="image_file"
                                    title="upload Pet image"
                                    accept="image/*"
                                    multiple={false}
                                    className="form-control"
                                    onChange={loadImage}
                                    style={{ color: "transparent" }}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row m-2 p-1 button-container">
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