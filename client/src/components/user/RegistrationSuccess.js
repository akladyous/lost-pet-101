import {useState, useEffect, useContext, Fragment} from 'react';
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
    const [error, setError] = useState('')

    useEffect( () =>{
        setShowChild(false)
        setLoading(true)
        const controller = new AbortController();
        
        const userProfileRequest = async () => {
            const resourceJS = JSON.stringify({user_profile: {...formData.user_profile}, user_address: {...formData.user_address} });
            const config = {
                headers: {"Content-type": "application/json"},
                signal: controller.signal
            }
            const response = await  axios.post('profile', resourceJS, config)
            const responseData = await response.data
            console.log("responseData: ", responseData)
            console.log('------------------')
            return response
        };
    
        const userAccountRequest = async () =>{
            const userObj = new FormData()
            if(avatarFile.current){
                userObj.append("avatar", avatarFile.current)
            }
            userObj.append('user_name', formData.user.user_name)
            userObj.append('email', formData.user.email)
            userObj.append('password', formData.user.password)
            userObj.append('password_confirmation', formData.user.password_confirmation)
            const config = {
                headers: { 'content-type': 'multipart/form-data'},
                signal: controller.signal,
            };
            const response = await axios.post("signup", userObj, config)
            const responseData = await response.data
            console.log("responseData: ", responseData)
            console.log('------------------')
            return response
        };
        setLoading(true)
        Promise.all([
            userAccountRequest(),
            userProfileRequest()
        ])
        .then( async (response) => {
            const [userAccountResponse, userProfileResponse] = await response
            console.log("response1: ", userAccountResponse)
            console.log("response2: ", userProfileResponse)
            if( (userAccountResponse.status === 201 && userProfileResponse.status === 200) && 
                (typeof userAccountResponse.data === 'object' && userAccountResponse.data.hasOwnProperty('email')) ) {
                handleUserEmail(userAccountResponse.data.email)
                handleUserState(true)
                // console.log("registration success")
                setLoading(false)
            } 
        })
        .catch(error => {
            setError(true)
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
            setError(false)
            controller.abort()
            console.log("Clean function")
            setShowChild(true)
        })
    },[] )

    return showChild ? (
        <div className='mt-3'  style={{height: '420px'}}>
            <div className="card border-0" style={{height: '420px'}}>
                <div className="card-title text-center fs-4">
                    {(()=>{
                        if(showChild){
                            if(userState){ return(
                                <>{formTitles}</>
                            )} else if(error){ return(
                                <>'Registration Error'</>
                            )} else if(loading){ return(
                                <>"Loading ..."</>
                            )}
                        }
                    })()}
                </div>
                <div className="card-body p-1 h-100">
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
