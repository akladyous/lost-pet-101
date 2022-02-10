import { useState, useEffect, useContext} from "react"
import axios from "axios";
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import PageFooter from "../layout/PageFooter.js";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserProvider.js";

export default function Login({children}) {

    // const redirect = useNavigate();
    const { handleUserState, handleUserEmail, userState } = useContext(userContext); 
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(null);
    const [resource, setResource] = useState(null);
    const [status, setStatus] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const navigate = useNavigate()

    const handleForm = e =>{
        e.preventDefault()
        if(userState){
            navigate('/home')
        } else{
            setStatus(true)
        }
    }

    useEffect(() => {
        if(status){
            const controller = new AbortController();
            (async () => {
                setLoading(true);
                const resourceJS = JSON.stringify({user_name: userName, password: password});
                const config = {
                    headers: { "content-type": "application/json" },
                    signal: controller.signal
                }
                const response = await axios.post("login", resourceJS, config);
                return response;
            })()
            .then((response) => {
                if (response && response.status === 200 && response.data.hasOwnProperty("email", "image_url")) {
                    handleUserEmail(response.data.email);
                    handleUserState(true);
                    setMessage("User successfully logged in");
                    setResource(response.data);
                    setAvatar(response.data.image_url)
                    console.log(response.data)
                } else {
                    setError(true);
                    setMessage("Error");
                }
                setLoading(false);
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
                    setStatus(false)
                }
            })
            .finally(() => {
                controller.abort();
                setStatus(false)
            });
        }
    }, [status]);
        
        return (
            <>
            <div
                className="container mt-5 login-container"
                style={{
                    height: "425px",
                    width: "425px",
                    border: "1px solid var(--orange)",
                    borderRadius: "25px",
                }}
            >
                <div className="d-flex justify-content-center py-2 avatar-container" style={{ height: "125px", position: 'relative' }}>
                    {loading && <div className="spinner-border" role="status" style={{color: 'var(--orange)', height: '101px', width: '101px'}}></div>}
                    <img className="mx-auto" alt="userAvatar"
                        src={avatar ? avatar : require("../../images/user_placeholder.png")}
                        style={{height: "100px", width: "100px", borderRadius: "50%", backgroundSize: "cover", position: 'absolute'}}
                    />
                </div>
                {/* ---------------- */}
                <div className="container mt-3" id="login" style={{ height: "225px" }} >
                    <div className="card border-0" style={{ height: "225px" }}>
                        <div className="card-title text-center fs-4">Login</div>
                        <div className="card-body py-1">
                            {/* ----------------------- */}
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="User Name"
                                        className="form-control"
                                        id="user_name"
                                        aria-describedby="userName"
                                        onChange={(e) => {
                                            setUserName(e.currentTarget.value);
                                        }}
                                        value={userName}
                                        disabled={userState}
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your User Name with
                                        anyone else.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input type="password" placeholder="Password" className="form-control"id="password"
                                        onChange={(e) => {setPassword(e.currentTarget.value);}} value={password} disabled={userState}
                                    />
                                </div>
                            </form>
                            <div className="container">
                                <div className="container my-2">
                                    <p disabled className="text-center border-0 form-control" aria-describedby="response">{message}</p>
                                </div>
                            </div>
                            {/* ----------------------- */}
                        </div>
                    </div>
                    <div
                        className="container my-1 buttons-container"
                        style={{ height: "35px" }}
                    >
                        <div className="row g-12" style={{ height: "35px" }}>
                            <div className="col-6 mx-auto">
                                <button
                                    disabled={status}
                                    type="submit"
                                    id="button-orange"
                                    className="btn w-100"
                                    onClick={handleForm}
                                >
                                    {userState ? "Home" : "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
};