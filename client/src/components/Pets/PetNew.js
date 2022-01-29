
import React from 'react';

export default function PetNew() {
    
    return (
        <div className="card m-2 border border-warning">
            <div className="card-header fs-4 fw-bold" style= {{ backgroundColor: "hsl(25,100%,50%)" }}>
                <div className='row'>
                    <div className="container d-flex">
                        {/* ------------------------------------------------------------------------------------ */}
                        <div className="col-md-3">

                        </div>
                        {/* ------------------------------------------------------------------------------------ */}
                        <div className="col-md-9">

                        </div>
                        {/* ------------------------------------------------------------------------------------ */}
                    </div>
                </div>
            </div>
        </div>
    );
}


<form>
    <div className="form-group text-start">
        <label htmlFor="recipient-name" className="col-form-label">
            Full Name
        </label>
        <input type="text" className="form-control" id="recipient-name" />
    </div>
    <div className="form-group text-start">
        <label htmlFor="recipient-email" className="col-form-label">
            Email Address
        </label>
        <input type="text" className="form-control" id="recipient-email" />
    </div>
    <div className="form-group text-start">
        <label htmlFor="recipient-phone" className="col-form-label">
            Phone Number
        </label>
        <input type="text" className="form-control" id="recipient-phone" />
    </div>

    <div className="form-group text-start">
        <label htmlFor="message-text" className="col-form-label">
            Message
        </label>
        <textarea className="form-control" id="message-text"></textarea>
    </div>
</form>;