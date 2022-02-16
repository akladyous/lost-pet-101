import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { userContext } from "./UserProvider.js";
import { useNavigate } from 'react-router-dom';

export default function RegistrationSuccess(props) {
    const {formData, 
            formTitles, 
            onFinish,
            avatarFile
        } = props || {}

    const { handleUserState, handleUserEmail, userState } = useContext(userContext); 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null)
    const [userAccount, setUserAccount] = useState(null)
    const [userProfile, setUserProfile] = useState(null)
    const navigate = useNavigate();

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
        return response;
    };

    useEffect( () =>{
        setLoading(true)

        userAccountRequest()
            .then( async (response) => {
                if ((response.status === 201)){
                    // (typeof response.data === "object" && response.data.hasOwnProperty("email"))
                    setUserAccount(response.data);
                    handleUserEmail(response.data.email);
                    handleUserState(true);
                    userProfileRequest()
                        .then(async (response) => {
                            if(response.status === 201){
                                setUserProfile(response.data);
                                setMessage("Registration has ben Successfully completed");
                            } else{
                                handleUserState(false)
                                handleUserEmail('')
                                setMessage("Registration Error")
                            }
                        })
                        .catch((error) => {
                            if (error.response.data.hasOwnProperty("error")) {
                                //backend error
                                setLoading(false);
                                setError(true);
                                setMessage(error.response.data.error);
                            } else {
                                //server error
                                setLoading(false);
                                setError(true);
                                setMessage(error.message);
                            }
                        })
                        .finally(() => {
                            setLoading(false);
                            userProfileRequestController.abort();
                        });
                }
                    })
            .catch((error) => {
                if (error.response.data.hasOwnProperty("error")) {
                    //backend error
                    setLoading(false);
                    setError(true);
                    setMessage(error.response.data.error);
                } else {
                    //server error
                    setLoading(false);
                    setError(true);
                    setMessage(error.message);
                }
            })
            .finally(() => {
                setLoading(false);
                userAccountRequestController.abort();
            });

    },[] )

    return (
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
                            <button
                                    type="submit"
                                    id='button-orange'
                                    className="btn w-100"
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        navigate('/home')
                                    }}
                                >
                                    Home
                            </button>
                        <div className="d-flex justify-content-center py-2 avatar-container" style={{ height: "125px", position: 'relative' }}>
                            {loading && <div className="spinner-border" role="status" style={{color: 'var(--orange)', height: '10px', width: '10px'}}></div>}
                        </div>
                            
                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
        </div>
    ) 
};
