import {useContext, useState, useEffect} from 'react'
import { userContext } from "../user/UserProvider.js";
import { Link } from 'react-router-dom';

export default function UserLogout({data, loading, error, message}) {

    const {handleUserEmail,handleUserState} = useContext(userContext)
    const [isLoading, setIsLoading] = useState(true)
    const logout = () =>{
        handleUserEmail('')
        handleUserState(false)
    };

    useEffect(()=>{
        if(loading){
            setTimeout(()=>{
                setIsLoading(false)
            }, 1500)
        }
    },[loading])

    return (
        <div className="container d-flex flex-column justify-content-between logout-main">
            <div className="avatar-container">
                <div className="d-flex justify-content-center py-2">
                    {
                        isLoading ?
                        <i class="fas fa-spinner fa-pulse"></i>
                        :
                        <img className="mx-auto" alt="userAvatar" src={require("../../images/user_placeholder.png")}/>
                    }
                </div>
            </div>
            <div className="container logout-container" >
                <div className="card border-0">
                    <div className="card-body">
                        <div className="card-title text-center fs-4">
                            {
                                (()=>{
                                    if( !error  && data !== null ){
                                        logout()
                                        return(
                                            <label htmlFor="logoutData">
                                                {data.message}
                                            </label>
                                        )
                                    } else if( error && data !== null){
                                        return(
                                            <label htmlFor="logoutData">
                                                {message}
                                            </label>
                                        )
                                    }
                                })()
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-12 logout-control">
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
    )
}
