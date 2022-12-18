import {useState, useCallback, useRef} from 'react';
import PageHeader from '../layout/PageHeader.js';
import MultiStepForm from '../hocs/MultiStepForm.js';
import PetNew from '../Pets/PetNew.js';
import PostListingInfo from './PostListingInfo.js'
import PostListingAddress from './PostListingAddress.js'
import PostListingSuccess from './PostListingSuccess.js';
import PageFooter from '../layout/PageFooter.js'

const today = () => {
    const date = new Date();
    return date.toLocaleDateString();
};

export default function PostListing() {
    const formTitles = useRef([
        "PET PROFILE",
        "LISTING INFORMATION",
        "LISTING ADDRESS",
        "LISTING POST",
    ]);

    const formObject = useRef({
        pet: {name: "",species: "",age: "",size: "",description: "",breed: "",gender: "",color: "",
        microchip: "",height: "",weight: "",coat: "",collar: "",image_file: null},
        listingInfo: { listing_type: "", published: true, published_at: today() },
        listing: { date_lost_found: "", msg_from: "", description: "" },
        listingAddress: {address1: "",address2: "",city: "",zip_code: "",state: ""}
    });

    const lastIndex = useRef(formTitles.current.length - 1);

    const [imagePath, setImagePath] = useState(null)
    const [formData, setFormData] = useState(formObject.current);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [post_image, setPostImage] = useState(null)

    const loadImageFile = useCallback( (e) =>{
        setImagePath(e.currentTarget.files[0])
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //     setImagePath(reader.result);
        // };
        var imageBlob = URL.createObjectURL(e.currentTarget.files[0]);
        setPostImage(imageBlob)
    },[] )

    const nextStep = useCallback( (e) => {
        e.preventDefault()
        if (currentIndex < lastIndex.current) {
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
        // to be implementaed later
    }

    return (
        <div className="lost_found_main">
            <PageHeader subTitle="Create Listing" />

            <div className="container mt-4 px-2 multi-step-container border-0">
                <div className="row h-100">
                    <div className="col-md-5 col-lg-5 px-2 mt-2">
                        <div className="card h-100" id="card-container">
                            <img
                            alt="PetImage"
                            src={post_image || require('../../images/pet_blank.png')}
                                style={{backgroundSize: 'fill', height: '100%', objectFit:'cover', borderRadius:'25px', padding: '5px'}}
                            />
                        </div>
                    </div>

                    <div className="col-md-7 col-md-7 px-2 mt-2">
                        <MultiStepForm
                            currentIndex={currentIndex}
                            lastIndex={lastIndex.current}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            onFinish={onFinish}
                            formData={formData}
                            updateFormData={updateFormData}
                            formTitles={formTitles.current[currentIndex]}
                        >
                            <PetNew
                                loadImageFile={loadImageFile}
                                imagePath={imagePath}
                            />
                            <PostListingInfo />
                            <PostListingAddress />
                            <PostListingSuccess imagePath={imagePath} />
                        </MultiStepForm>
                    </div>
                </div>
            </div>

            <PageFooter></PageFooter>
        </div>
    );
}
