import PageHeader from '../layout/PageHeader.js';
import React from 'react';

export default function ListingNew() {
    return (
            <div>
                <PageHeader
                    title="LOST & FOUND PETS"
                    subTitle="CREATE LISTING & FIND YOUR LOST PET"
                />

                <div className='main_container container mt-4'>

                    <div className='card-group border px-2' style={{height: '400px'}}>


                        <div className='col-md-3 col-lg-3 px-2 mt-2' style={{height: '200px', backgroud: 'green'}}>
                            <div className='card ' style={{background: 'yellow'}}>
                                <h2>test</h2>
                                {/* <h2>test</h2>
                                <h2>test</h2>
                                <h2>test</h2>
                                <h2>test</h2>
                                <h2>test</h2>
                                <h2>test</h2>
                                <h2>test</h2> */}
                            </div>
                        </div>



                        <div className='col-md-9 col-md-9 mt-2 h-100' style={{backgroud: 'khaki'}}>

                            <div className='card'>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Pet Info</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Listing Info</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Listing Address</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Listing Comment</a>
                                    </li>
                                </ul>





                            </div>
                        </div>





                    </div>



                </div>

            </div>
    )
}
