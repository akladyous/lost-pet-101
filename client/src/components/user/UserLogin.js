import { useState, useContext } from "react"
// import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserProvider.js";

export default function Login({children}) {

    const redirect = useNavigate();
    const { handleUserState, handleUserEmail } = useContext(userContext); 
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        fetch("login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                user_name: userName,
                password: password,
            }),
        })
            .then( res => res.json())
            .then((loginData) => {
                if(typeof loginData === 'object' && loginData.hasOwnProperty('email')){
                    handleUserEmail(loginData.email)
                    handleUserState(true)
                }
                // console.log(loginData)
                redirect('/home')
            })
            .catch((err) => {
                console.error("error: ", err);
            });
    }

    return (
        <div className="container cols-xs-12 col-sm-12 col-md-4 mt-5 content-area">
            <div className="card" id="card-container">
                <div className="card-header" id="card-container-header">
                    Sign in
                </div>
                <div className="card-body">
                    <h5 className="card-title">Login</h5>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="user_name" className="form-label">
                                User Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="user_name"
                                aria-describedby="userName"
                                onChange={(e) => {
                                    setUserName(e.currentTarget.value);
                                }}
                                value={userName}
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your User Name with anyone
                                else.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={(e) => {
                                    setPassword(e.currentTarget.value);
                                }}
                                value={password}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            id="button-orange"
                            type="submit"
                            onClick={handleForm}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="container">
                <p className="text">
                    Don't have an account?&nbsp;
                    <Link className="link-primary" to="Signup" state={"User Signup"}>
                        Signup Now
                    </Link>
                </p>
            </div>
        </div>
    );
};