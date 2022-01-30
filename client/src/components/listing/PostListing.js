import React, {useState, useEffect, useRef} from 'react';
import PageHeader from '../layout/PageHeader.js';
import PetNew from '../Pets/PetNew.js';

export default function PostListing() {
    const [imagePreview, setImagePreview] = useState(null)
    const imgTag = useRef()

    
    return (
            <div>
                <PageHeader
                    title="LOST & FOUND PETS"
                    subTitle="CREATE LISTING & FIND YOUR LOST PET"
                />

                <div className='main_container container mt-4'>

                    <div className='card-group border px-2' style={{height: '850px'}}>


                        <div className='col-md-3 col-lg-3 px-2 mt-2' style={{height: '200px', backgroud: 'green'}}>
                            <div className='card ' style={{background: 'yellow'}}>
                                <img src={imagePreview && "https://via.placeholder.com/150x400?text=pet%20image"} alt="PetImage" />
                                {/* <img src={imagePreview} alt="PetImage" ref={imgTag}/> */}
                            </div>
                        </div>

                        <div className='col-md-9 col-md-9 mt-2' style={{backgroud: 'khaki'}}>

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
                                </ul>

                                <PetNew setImagePreview={setImagePreview}></PetNew>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
    )
}
