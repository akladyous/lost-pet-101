import React from 'react';

export default function UserAddress(props) {
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
        updateFormData("user_address", currentVaue);
    };
    return (

        <div className='mt-3' style={{height: '420px'}}>

            <div className="card border-0" style={{height: '420px'}}>
                
                <div className="card-title text-center fs-4">
                    {formTitles}
                </div>

                <div className="card-body 1">
                    <div className="container my-2">
                        <input value={formData.user_address.address1} onChange={handleChange} type="text" className="form-control" name='address1' aria-describedby="AddressOne" placeholder='Address' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_address.address2} onChange={handleChange} type="text" className="form-control" name='address2' aria-describedby="AddressTwo" placeholder='Appartment &amp suite number' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_address.city} onChange={handleChange} type="text" className="form-control" name='city' aria-describedby="City" placeholder='City' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_address.zip_code} onChange={handleChange} type="text" className="form-control" name='zip_code' aria-describedby="zipCode" placeholder='Zip Code' />
                    </div>
                    <div className="container my-2">
                        <input value={formData.user_address.state} onChange={handleChange} type="text" className="form-control" name='state' aria-describedby="State" placeholder='State' />
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
};