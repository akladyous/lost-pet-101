import {useState, useCallback, useMemo, useEffect} from 'react';
import PageHeader from '../layout/PageHeader.js';
import MultiStepForm from '../hocs/MultiStepForm.js';
import PetNew from '../Pets/PetNew.js';
import PostListingInfo from './PostListingInfo.js'
import PostListingAddress from './PostListingAddress.js'
import PostListingSuccess from './PostListingSuccess.js';

const formTitles = ["Pet Profile", "Listing Information", "Listing Address", "Listing Success"];


export default function PostListing() {

    const [petImage, setPetImage] = useState(null)
    const [formData, setFormData] = useState(formObject);
    const [currentIndex, setCurrentIndex] = useState(0);

    const loadImageFile = useCallback( (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPetImage(reader.result);
        };
    },[petImage] )

    const lastIndex = useMemo( () =>{
        return formTitles.length - 1
    },[[formTitles]] )

    const nextStep = useCallback( (e) => {
        e.preventDefault()
        if (currentIndex < lastIndex) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex === lastIndex) {
            onFinish();
        }
    },[currentIndex] ) 
    
    const prevStep = useCallback( (e) => {
        e.preventDefault()
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    },[currentIndex] )

    const updateFormData = useCallback((obj_name, obj_pair) => {
        setFormData((prevState) => {
            return { ...prevState, [obj_name]: { ...formData[obj_name], ...obj_pair } };
        });
    }, [formData] );

    // const updateFormData = (obj_name, obj_pair) => {
    //     setFormData( (prevState) => {
    //         return { ...prevState, [obj_name]: { ...formData[obj_name], ...obj_pair } }
    //     })
    // }

    const onFinish = () =>{
        console.log(formData.pet);
    } 

    return (
        <div className="lost_found_main">
            <PageHeader
                title="LOST & FOUND PETS"
                subTitle="CREATE LISTING & FIND YOUR LOST PET"
            />

            <div className="container mt-4 px-2 border multi-step-container">
                <div className="row h-100">
                    <div className="col-md-5 col-lg-5 px-2 mt-2">
                        <div
                            className="card h-100"
                            style={{ borderColor: "var(--orange)" }}
                        >
                            <img
                                src={petImage}
                                alt="PetImage"
                                // "https://via.placeholder.com/150x400?text=pet%20image"
                            />
                        </div>
                    </div>

                    <div className="col-md-7 col-md-7 px-2 mt-2">
                        <MultiStepForm
                            currentIndex={currentIndex}
                            lastIndex={lastIndex}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            onFinish={onFinish}
                            formData={formData}
                            updateFormData={updateFormData}
                            formTitle={formTitles[currentIndex]}
                        >
                            <PetNew loadImageFile={loadImageFile} />
                            <PostListingInfo />
                            <PostListingAddress />
                            <PostListingSuccess petImage={petImage} />
                        </MultiStepForm>
                    </div>
                </div>
            </div>
        </div>
    );
}
const today = () => {
    const date = new Date();
    return date.toLocaleDateString();
    console.log(today);
};

const formObject = {
    pet: {
        name: "",
        species: "",
        age: "",
        size: "",
        description: "",
        breed: "",
        gender: "",
        color: "",
        microchip: "",
        height: "",
        weight: "",
        coat: "",
        collar: "",
        image_file: null,
    },
    listingInfo: {
        listing_type: "",
        published: true,
        published_at: today(),
        
    },
    listing: {
        date_lost_found: "",
        msg_from: "",
        description: "",
    },
    listingAddress: {
        address1: "",
        address2: "",
        city: "",
        zip_code: "",
        state: "",
    },
    // formTitles:{titles:
    //     ["Pet Profile", "Listing Information", "Listing Address", "Listing Success"]
    // }
};