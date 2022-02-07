import {useState, useEffect, useContext, Fragment, useRef} from 'react';
import axios from 'axios';
import { userContext } from "./UserProvider.js";
// import { Link } from 'react-router-dom';

export default function RegistrationSuccess(props) {
    const {formData, 
            formTitles, 
            onFinish,
            avatarFile
        } = props || {}

    const { handleUserState, handleUserEmail, userState } = useContext(userContext); 
    const [showChild , setShowChild] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [userAccount, setUserAccount] = useState(null)
    const [userProfile, setUserProfile] = useState(null)
    // const userAccountStatus = useRef(null)
    // const userProfileStatus = useRef(null)

        const userAccountRequestController = new AbortController();
        const userAccountRequest = async () => {
            const userObj = new FormData();
            if (avatarFile.current) {
                userObj.append("avatar", avatarFile.current);
            }
            userObj.append("user_name", formData.user.user_name);
            userObj.append("email", formData.user.email);
            userObj.append("password", formData.user.password);
            userObj.append(
                "password_confirmation",
                formData.user.password_confirmation
            );
            const config = {
                headers: { "content-type": "multipart/form-data" },
                signal: userAccountRequestController.signal,
            };
            const response = await axios.post("signup", userObj, config);
            console.log("userProfileRequest-respone: ", response);
            return response;
        };

        const userProfileRequestController = new AbortController();
        const userProfileRequest = async () => {
            const resourceJS = JSON.stringify({
                user_profile: { ...formData.user_profile },
                user_address: { ...formData.user_address },
            });
            const config = {
                headers: { "Content-type": "application/json" },
                signal: userProfileRequestController.signal,
            };
            const response = await axios.post("profile", resourceJS, config);
            console.log("userAccountRequest-response: ", response);
            return response;
        };



    useEffect( () =>{
        setShowChild(false)
        setLoading(true)
        setLoading(true)

        userAccountRequest()
            .then( async (response) => {
                setUserAccount(response.data)
                if ((response.status === 201) && // && userProfileResponse.status === 200
                    (typeof response.data === "object" && response.data.hasOwnProperty("email"))){
                        handleUserEmail(response.data.email);
                        handleUserState(true);
                        setMessage("Registration has ben Successfully completed");
                    }
                userProfileRequest()
                    .then(async (response) => {
                        console.log("userProfileRequest-response : inside useeffect: ", response)
                        setUserProfile(response.data);
                        setMessage(
                            "Registration has ben Successfully completed"
                            );
                        })
                        .catch((error) => {
                            setMessage(error.response.data.error);
                        })
                        .finally(() => {
                            setLoading(false);
                            userProfileRequestController.abort();
                            console.log(
                                "Clean function - UsrAccountRequest"
                                );
                                setShowChild(true);
                            });
            })
            .catch((error) => {
                setMessage(error.response.data.error);
            })
            .finally(() => {
                setLoading(false);
                userAccountRequestController.abort();
                console.log("Clean function - UsrAccountRequest")
                // setShowChild(true);
            });

        
        // if(userAccount){
        //     userProfileRequest()
        //         .then(async (response) => {
        //             setUserProfile(response.data)
        //             setMessage("Registration has ben Successfully completed")
        //         })
        //         .catch((error) => {
        //             setMessage(error.response.data.error);
        //         })
        //         .finally(() => {
        //             setLoading(false);
        //             controller.abort();
        //             console.log("Clean function - UsrAccountRequest");
        //             setShowChild(true);
        //         });
        // }
        


    },[] )

    return showChild ? (
        <div className='mt-3'  style={{height: '420px'}}>
            <div className="card border-0" style={{height: '420px'}}>
                <div className="card-body p-1 h-100">
                    <div className="card-title text-center fs-4">{formTitles}</div>
                        <div className="text-center">
                            {(()=>{
                                if (message) {
                                    if (Array.isArray(message)) {
                                        message.map((msg, idx) => {
                                            return (<p key={idx}>{msg}</p>)
                                        });
                                    } else{
                                        return (<p>{message}</p>)
                                    }
                                }
                            })()}
                        </div>
                </div>                         
            </div>
            <div className="container my-3 buttons-container" >
                    <div className="row g-12">
                        <div className="col-8 mx-auto">
                            <a
                                className="btn w-100"
                                id='button-orange'
                                href="/home"
                            >
                                Home Page
                            </a>
                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
        </div>
    ) : <Fragment/>
};
