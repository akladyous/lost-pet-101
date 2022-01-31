import React, {useState} from 'react';
// import { wrapper } from '../hocs/wrapper.js';
// import FormButtons from '../layout/FormButtons.js';

// const ControlButtons = wrapper(FormButtons);


export default function PetNew(props) {
    const {
        setPetImage, 
        currentIndex, 
        lastIndex, 
        nextStep, 
        prevStep,
        formData,
        updateFormData
    } = props || {}

    const [imageFile, setImageFile] = useState(null)


    const loadImage = (e) => {
        console.log(e.currentTarget)
        var imgBlob = URL.createObjectURL(e.currentTarget.files[0]);
        setImageFile(e.currentTarget.files[0]);
        setPetImage(imgBlob);
    }

    const handleForm = (e) => {
        e.preventDefault();

        // nextStep()
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        const currentVaue = {[e.currentTarget.name]: e.currentTarget.value}
        updateFormData('pet', currentVaue)
    }

    return (
        <div className="card p-3" style={{ borderColor: "var(--orange)" }}>
            {/* <div className="card p-2"> */}
            {/* style= {{ backgroundColor: "hsl(25,100%,50%)" }} */}
            <div className="row">
                <div className="container">
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
                                    // value={petData.name}
                                    // onChange={setCurrentValue}
                                    value={formData.pet.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Species
                            </label>
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="species"
                                    className="form-control"
                                    // value={petData.species}
                                    // onChange={setCurrentValue}
                                    value={formData.pet.species}
                                    onChange={handleChange}
                                />
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
                                <input
                                    type="text"
                                    name="size"
                                    className="form-control"
                                    value={formData.pet.size}
                                    onChange={handleChange}
                                />
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
                                    <option value=''>{''}</option>
                                    <option value="male">Male</option>
                                    <option value="female">Femail</option>
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
                                    <option value={null}>{''}</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-4 col-form-label fw-normal">
                                Upload image
                            </label>
                            <div className="col-8">
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple={false}
                                    className="form-control"
                                    onChange={loadImage}
                                />
                            </div>
                        </div>
                    </form>
                    {/* <div className="col-md-3"></div>
                        <div className="col-md-9"></div> */}
                </div>
            </div>
            {/* ---------------------------- */}
            <div className="container mt-2 px-1">
                <div className="row">
                    <div className="col-2">
                        <div className="d-grid">
                            <button
                                type="button"
                                className="btn w-100"
                                onClick={prevStep}
                                disabled={currentIndex === 0}
                                style={{ backgroundColor: "hsl(25,100%,50%)" }}
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
                                {currentIndex >= lastIndex ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>

                    <div className="col-6"></div>
                </div>
            </div>

        </div>
    );
};