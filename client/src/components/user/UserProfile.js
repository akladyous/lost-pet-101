import React from 'react';

export default function UserProfile(props) {
    const {currentIndex, 
            lastIndex, 
            nextStep, 
            prevStep, 
            formData, 
            updateFormData, 
            formTitles, 
            onFinish} = props || {}
    
    const handleChange = (e) => {
        e.preventDefault();
        const currentVaue = {
            [e.currentTarget.name]: e.currentTarget.value,
        };
        updateFormData("user_profile", currentVaue);
    };
    return (

        <div className='mt-3' style={{height: '420px'}}>

            <div className="card border-0" style={{height: '420px'}}>
                
                <div className="card-title text-center fs-4">
                    {formTitles}
                </div>

                <div className="card-body py-1">
                    <div className="container my-2">
                        <input value={formData.user_profile.first_name} onChange={handleChange} type="text" className="form-control" name='first_name' aria-describedby="FirstName" placeholder='First Name' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_profile.last_name} onChange={handleChange} type="text" className="form-control" name='last_name' aria-describedby="LastName" placeholder='Last Name' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_profile.home_phone} onChange={handleChange} type="text" className="form-control" name='home_phone' aria-describedby="HomePhone" placeholder='Home Number' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_profile.cell_phone} onChange={handleChange} type="text" className="form-control" name='cell_phone' aria-describedby="CellPhone" placeholder='Cell Number' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_profile.job_title} onChange={handleChange} type="text" className="form-control" name='job_title' aria-describedby="JobTitle" placeholder='Job Title' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_profile.company} onChange={handleChange} type="text" className="form-control" name='company' aria-describedby="Company" placeholder='Company' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_profile.website} onChange={handleChange} type="text" className="form-control" name='website' aria-describedby="Blog" placeholder='Blog' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_profile.blog} onChange={handleChange} type="text" className="form-control" name='blog' aria-describedby="Website" placeholder='Website' />
                    </div>
                </div>
            
            </div> {/* Main Card End */}

            {/* Buttons Container Start */}
            <div className="container my-3 buttons-container" >
                <div className="row g-12">
                    <div className="col-6">
                        <button
                            type="submit"
                            id='button-orange'
                            className="btn w-100"
                            onClick={prevStep}
                            disabled={currentIndex === 0}
                        >
                            Previous
                        </button>
                    </div>
                    <div className="col-6">
                        <button 
                            type="submit"
                            id='button-orange'
                            className="btn w-100"
                            onClick={nextStep}
                        >
                            {lastIndex - currentIndex === 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
            {/* Buttons Container End */}
        </div>

    )
}
