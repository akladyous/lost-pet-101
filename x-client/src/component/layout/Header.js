import {useContext, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { userContext } from "../users/UserProvider.js";
// import { LogoutUser } from "../users/logoutUser.js";


export default function Header() {

    const {handleUserState} = useContext(userContext)
    const [userRes, setUserRes] = useState(null)
    
    // const handleLogout = ()=>{
    //     console.log("test")
    //     axios.delete('/api/users/logout')
    //     .then(
    //         console.log(response => {
    //             response.json()
    //             setUserRes(response)
    //             console.log(response)
    //         })
    //     )
    //     .catch(err => console.error(err))
        
    //     fetch("api/users/logout", { method: "DELETE" })
    //     .then( response => {
    //         response.json()
    //         handleUserState(true);
    //         console.log(response)
    //         }
    //     )
    //     .then(data => console.log(data))
    //     .catch(err => {
    //         console.error(err)
    //     })


    // }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height: "80px", backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Lot Pets</a>
                <button className="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='/dashboard'>Services</a>
                        </li>
                    </ul>
                </div>

                <div className="btn-group" >
                    <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        User
                    </button>
                <ul className="dropdown-menu">
                    {/* <Link className='dropdown-item' to='/login'>Login</Link> */}
                    <li><a className="dropdown-item" href="/logout" onClick={null}>Logout</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    {/* <Link className='dropdown-item' to='account'>Account</Link> */}
                </ul>
                </div>

            </div>
                

        </nav>
    )
}
