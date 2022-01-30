import React, {useState} from 'react';
import PageHeader from '../layout/PageHeader.js';
import MultiStepResources from './MultiStepResources.js';
import PetNew from '../Pets/PetNew.js';
import PostListingInfo from './PostListingInfo.js'
import PostListingAddress from './PostListingAddress.js'


export default function PostListing() {
    const [imagePreview, setImagePreview] = useState(null)

    const [onBoardindData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = stepData =>{
        setOnboardingData({...onBoardindData, ...stepData});
        console.log("currentIndex: ", currentIndex);
        console.log("onBoardindData : ", onBoardindData);
        setCurrentIndex(currentIndex + 1);
    }

    const onFinish = () => {
        console.log(onBoardindData)
    }
    
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

                                {/* <PetNew setImagePreview={setImagePreview}></PetNew> */}
                                <MultiStepResources
                                    currentIndex={currentIndex}
                                    onNext={onNext}
                                    onFinish={onFinish}
                                >
                                    <PetNew />
                                    <PostListingInfo />
                                    <PostListingAddress />
                                </MultiStepResources>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
    )
}
