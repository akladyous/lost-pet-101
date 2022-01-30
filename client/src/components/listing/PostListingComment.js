
import React, {useState} from 'react';

export default function PostListingAddress() {

    const [listingComment, setListingComment] = useState({});

    const setCurrentValue = (e) => {
        const currentVaue = {[e.currentTarget.name]: e.currentTarget.value}
        setListingComment((petData) => ({
            ...petData,
            ...currentVaue,
        }));
    }


return (
        <div className="card m-2 bg-transparent">
            <div className="card-header"> 
                <div className='row'>
                    <div className="container">
                        <form className=''>
                            <div className='row mb-1'>
                                <label htmlFor="address1" className="col-4 col-form-label fw-normal">Age</label>
                                <div className='col-8'>
                                    <input type="text" name="address1" className="form-control" value={listingComment['listing_type']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="address2" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="address2" className="form-control" value={listingComment['published_at']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="city" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="city" className="form-control" value={listingComment['date_lost_found']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="zip_code" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="zip_code" className="form-control" value={listingComment['msg_from']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="state" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="state" className="form-control" value={listingComment['description']} onChange={setCurrentValue} />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
