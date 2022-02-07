import React from 'react';

export default function UserAccountInfo(props) {
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
        updateFormData("user", currentVaue);
    };

    return (
        <div className='mt-3' style={{height: '420px'}}>

            <div className="card border-0" style={{height: '420px'}}>
                
                <div className="card-title text-center fs-4">
                    {formTitles}
                </div>

                <div className="card-body p-1">
                    <div className="container my-2">
                        <input value={formData.user.user_name} onChange={handleChange} type="text" name='user_name' className="form-control" aria-describedby="userName" placeholder='User Name' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user.email} onChange={handleChange} type="text" name='email' className="form-control" aria-describedby="Email" placeholder='Email' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user.password} onChange={handleChange} type="password" name='password' className="form-control" aria-describedby="password" placeholder='Password' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user.password_confirmation} onChange={handleChange} type="password" name='password_confirmation' className="form-control" aria-describedby="passwordConfirmation" placeholder='Password Confirmation' />
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
