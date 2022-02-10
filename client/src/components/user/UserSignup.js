import {useState, useRef, useEffect, useCallback} from 'react';
import MultiStepForm from '../hocs/MultiStepForm.js';
import AccountAccountInfo from './UserAccountInfo.js';
import UserProfile from './UserProfile.js';
import UserAddress from './UserAddress.js';
import RegistrationSuccess from "./RegistrationSuccess.js";

export default function UserSignup() {

    const formTitles = useRef(["Account Information", "User Profile", "User Address", "Account Registration"])
    const UserObj = useRef({
        user: { user_name: "", email: "", password: "", password_confirmation: ""},  
        user_profile: { first_name: "", last_name: "", home_phone: "", cell_phone: "", job_title: "", company: "", website: "",blog: ""},
        user_address: { address1: "", address2: "", city: "", zip_code: "",state: ""}
    })
    const lastIndex = useRef(formTitles.current.length - 1)
    const avatarFile = useRef(null)
    const progressRef = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [formData, setFormData] = useState(UserObj.current)
    const [avatar, setAvatar] = useState(null)


    const loadImageFile = useCallback( (e) => {
        e.preventDefault();
        avatarFile.current = e.target.files[0];
        var imageBlob = URL.createObjectURL(avatarFile.current);
        setAvatar(imageBlob);
        },[avatar]);

    const nextStep = useCallback( (e) => {
        e.preventDefault()
        if (currentIndex < lastIndex.current) {
            setCurrentIndex(currentIndex + 1);
            progressRef.current.setAttribute("style", `width:${(currentIndex + 1) * 33}%`);
        } else if (currentIndex === lastIndex) {
            onFinish();
        }
    },[currentIndex] ) 
    
    const prevStep = useCallback( (e) => {
        e.preventDefault()
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            progressRef.current.setAttribute("style", `width:${(currentIndex -1) * 33}%`);
        }else{
            // progressRef.current.setAttribute("style", `width:${(currentIndex ) * 33}%`);
        }
    },[currentIndex] )

    const updateFormData = useCallback((obj_name, obj_pair) => {
        setFormData((prevState) => {
            return { ...prevState, [obj_name]: { ...formData[obj_name], ...obj_pair } };
        });
    }, [formData] );

    const onFinish = useCallback( ()=>{
        // console.log(currentIndex)
    },[] )

    return (
        <div
            className="container mt-3 signup-container"
            style={{ width: "450px", height: "625px" }}
        >
            <div
                className="row progress-container mx-0"
                style={{ height: "25px" }}
            >
                <div className="progress"
                style={{boxShadow: 'none', overflow: 'hidden', backgroundColor: 'transparent', WebkitBoxShadow: 'none', borderRadius: '15px'}}
                >
                    <div
                        ref={progressRef}
                        className="progress-bar bg-orange"
                        role="progressbar"
                        style={{ width: "0%", borderRadius: '15px' }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        
                    </div>
                </div>
            </div>

            <div
                className="container"
                style={{
                    height: "600px",
                    border: "1px solid var(--orange)",
                    borderRadius: "25px",
                }}
            >
                <div
                    className="container py-2 avatar-container"
                    style={{ height: "100px" }}
                >
                    <label className="d-flex" htmlFor="input-file">
                        <img
                            className="mx-auto "
                            src={
                                avatar
                                    ? avatar
                                    : require("../../images/user_placeholder.png")
                            }
                            alt="user_placeholder"
                            style={{
                                height: "100px",
                                width: "100px",
                                borderRadius: "50%",
                                backgroundSize: "cover",
                            }}
                        />
                        <input
                            id="input-file"
                            type="file"
                            name="image_file"
                            title="upload Pet image"
                            accept="image/*"
                            multiple={false}
                            style={{ display: "none" }}
                            onChange={loadImageFile}
                        />
                    </label>
                </div>

                <div
                    className="container"
                    id="accountInformationMain"
                    style={{ height: "430px" }}
                >
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
                        <AccountAccountInfo />
                        <UserProfile />
                        <UserAddress />
                        <RegistrationSuccess avatarFile={avatarFile} />
                    </MultiStepForm>
                </div>
            </div>

            {/* <div className="row"></div> */}
        </div>
    );
};