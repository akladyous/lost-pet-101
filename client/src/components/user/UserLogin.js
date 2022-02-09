import { useState, useContext } from "react"
// import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserProvider.js";
import PageFooter from "../layout/PageFooter.js";

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
    const avatar = null
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
                <div
                    className="d-flex justify-content-center py-2 avatar-container"
                    style={{ height: "125px" }}
                >
                    <img
                        className="mx-auto"
                        alt="userAvatar"
                        src={
                            avatar
                                ? avatar
                                : require("../../images/user_placeholder.png")
                        }
                        style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "50%",
                            backgroundSize: "cover",
                        }}
                    />
                </div>
                {/*  */}
                <div
                    className="container mt-3"
                    id="login"
                    style={{ height: "225px" }}
                >
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
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your User Name with
                                        anyone else.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="form-control"
                                        id="password"
                                        onChange={(e) => {
                                            setPassword(e.currentTarget.value);
                                        }}
                                        value={password}
                                    />
                                </div>
                            </form>
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
                                    type="submit"
                                    id="button-orange"
                                    className="btn w-100"
                                    onClick={handleForm}
                                >
                                    Submit
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