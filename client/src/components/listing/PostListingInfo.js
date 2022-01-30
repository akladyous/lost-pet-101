
import React, {useState} from 'react';

export default function PostListingInfo({goToNext}) {

    const [listingInfo, setListingInfo] = useState({})

    const setCurrentValue = (e) => {
        const currentVaue = {[e.currentTarget.name]: e.currentTarget.value}
        setListingInfo((petData) => ({
            ...petData,
            ...currentVaue
        }));
    }

    const handleForm = (e) => {
        e.preventDefault()
        goToNext({listing_info: listingInfo})
    }

return (
        <div className="card m-2 bg-transparent">
            <div className="card-header"> 
                <div className='row'>
                    <div className="container">
                        <form className=''>
                            <div className='row mb-1'>
                                <label htmlFor="listing_type" className="col-4 col-form-label fw-normal">Age</label>
                                <div className='col-8'>
                                    <input type="text" name="listing_type" className="form-control" value={listingInfo['listing_type']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="published_at" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="published_at" className="form-control" value={listingInfo['published_at']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="date_lost_found" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="date_lost_found" className="form-control" value={listingInfo['date_lost_found']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="msg_from" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="msg_from" className="form-control" value={listingInfo['msg_from']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="description" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="description" className="form-control" value={listingInfo['description']} onChange={setCurrentValue} />
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
