import {useContext} from 'react'
import { Link } from 'react-router-dom';
import { userContext } from "../user/UserProvider.js";
const logo = require('../../images/logo.png')

export default function Header() {
    const {userEmail, handleUserEmail, userState, handleUserState} = useContext(userContext)

    
    const handleLogout = ()=>{
        fetch("api/users/logout", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data: ", data)
                handleUserEmail('')
                handleUserState(false)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ height: "80px", backgroundColor: "#e3f2fd" }}
        >
            <div className="container-fluid">
                
                <img src={logo} alt="logo" style={{ height: "35px" }} />
                <Link className="navbar-brand" to="home">&nbsp;Lot Pets</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="about">About</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="stories">Our Stories</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="lost_found">Lost & Found</Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="listing">Create Listing</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                
                <span>{userEmail}</span>
                <div className="dropdown">
                    <button
                        type="button"
                        id="dropdownMenuLink"
                        className="btn btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        // onClick={console.log("test")}
                    >
                        User
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-star">
                        <Link
                            className={`dropdown-item ${userState === false ? "" : "disabled"}`} to="login">
                            Login
                        </Link>
                        <li>
                            <button
                                className={`dropdown-item ${userState === true ? "" : "disabled"}`} onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <Link className={`dropdown-item ${userState === true ? "" : "disabled"}`} to="account">
                            Account
                        </Link>

                        <Link className={`dropdown-item ${userState === false ? "" : "disabled"}`} to="Signup">
                            Signup Now
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
