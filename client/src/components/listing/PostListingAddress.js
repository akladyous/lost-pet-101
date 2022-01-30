
import React, {useState} from 'react';

export default function PostListingAddress({goToNext}) {

    const [listingAddress, setListingAddress] = useState({});

    const setCurrentValue = (e) => {
        const currentVaue = {[e.currentTarget.name]: e.currentTarget.value}
        setListingAddress((petData) => ({
            ...petData,
            ...currentVaue,
        }));
    }

    const handleForm = (e) => {
        e.preventDefault()
        goToNext({ listing_address: listingAddress });
    }

return (
        <div className="card m-2 bg-transparent listing_address">
            <div className="card-header"> 
                <div className='row'>
                    <div className="container">
                        <form className=''>
                            <div className='row mb-1'>
                                <label htmlFor="address1" className="col-4 col-form-label fw-normal">Address</label>
                                <div className='col-8'>
                                    <input type="text" name="address1" className="form-control" value={listingAddress['listing_type']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="address2" className="col-4 col-form-label fw-normal">Address</label>
                                <div className='col-8'>
                                <input type="text" name="address2" className="form-control" value={listingAddress['published_at']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="city" className="col-4 col-form-label fw-normal">City</label>
                                <div className='col-8'>
                                <input type="text" name="city" className="form-control" value={listingAddress['date_lost_found']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="zip_code" className="col-4 col-form-label fw-normal">Zip Code</label>
                                <div className='col-8'>
                                <input type="text" name="zip_code" className="form-control" value={listingAddress['msg_from']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="state" className="col-4 col-form-label fw-normal">State</label>
                                <div className='col-8'>
                                <input type="text" name="state" className="form-control" value={listingAddress['description']} onChange={setCurrentValue} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type='submit' className='btn btn-light' onClick={handleForm}>Next</button>
                </div>
            </div>
        </div>
    );
    
}
