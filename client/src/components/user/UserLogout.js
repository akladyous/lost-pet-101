import '../css/logout.css'
import {useContext, useState, useEffect} from 'react'
import { userContext } from "../user/UserProvider.js";
import { Link } from 'react-router-dom';

export default function UserLogout({data, loading, error, message}) {

    const {handleUserEmail,handleUserState} = useContext(userContext)
    const [isLoading, setIsLoading] = useState(true)

    if(!error && data !== null){
        handleUserEmail("");
        handleUserState(false);
    }

    useEffect(()=>{
        if(loading){
            setTimeout(()=>{
                setIsLoading(false)
            }, 1500)
        }
    },[loading])

    return (
        <div className='container logout-main'>
            <div className="logout-area">
                <div className="container d-flex flex-column justify-content-between">

                    <div className="d-flex justify-content-center py-2 avatar-container">
                        {isLoading && <div className="spinner-border user-avatar" role="status"></div>}
                        <img className="mx-auto user-image" alt="userAvatar"
                            src={require("../../images/user_placeholder.png")}
                        />
                    </div>


                    <div className="container mt-1 d-flex flex-column justify-content-between card-content" >
                        <div className="card border-0" >
                            <h2 className="card-title text-center fs-4">
                                Account Logout
                            </h2>
                            <div className="card-body py-1">
                                <div className="card-body">
                                    <div className="card-title text-center fs-4">
                                        {(() => {
                                            if (!error && data !== null) {
                                                return (<p className='text-center fw-light fs-5'>{data.message}</p>);
                                            } else if (error && data !== null) {
                                                return (<p className='text-center fw-light fs-5'>{message}</p>);
                                            }
                                        })()}
                                    </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row g-12 my-auto">
                    <div className="col-6 mx-auto">
                        <Link
                            type="submit"
                            id="button-orange"
                            className="btn w-100"
                            to="/home"
                        >
                            Home
                        </Link>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
    );
}
