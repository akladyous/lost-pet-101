import {useState, useRef, useEffect, useCallback} from 'react';
import { useLocation } from 'react-router-dom';
import MultiStepForm from '../hocs/MultiStepForm.js';

export default function UserSignup() {

    const formTitles = useRef(["Account Information", "User Profile", "User Address"])
    const UserObj = useRef({ 
        user_name: "", email: "", password: "", password_confirmation: "",  
        user_profile: { first_name: "", last_name: "", home_phone: "", cell_phone: "", job_title: "", company: "", website: "",blog: ""},
        user_address: { address1: "", address2: "", city: "", zip_code: "",state: ""}
    })
    
    const location = useLocation()
    const lastIndex = useRef(formTitles.current.length - 1)
    const avatarFile = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [formData, setFormData] = useState(UserObj.current)
    const [avatar, setAvatar] = useState(null)


    const loadImageFile = useCallback(
        (e) => {
            avatarFile(e.currentTarget.files[0]);
            var imageBlob = URL.createObjectURL(e.currentTarget.files[0]);
            setAvatar(imageBlob);
        },[avatar]);

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

    const onFinish = useCallback( ()=>{
        console.log(currentIndex)
    },[] )

    return (
        <div container>
            {/* Progress Bar Star */}
            {/* Progress Bar End */}


            <MultiStepForm 
                currentIndex={currentIndex}  
                lastIndex={lastIndex.current}
                nextStep={nextStep} 
                prevStep={prevStep}
                formData={formData}
                updateFormData={updateFormData}
                formTitles={formTitles.current[currentIndex]}
                onFinish={onFinish}
            >

            </MultiStepForm>
        </div>
    );
}

