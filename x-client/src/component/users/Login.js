import { useState, useContext } from "react"
import { userContext } from "./UserProvider.js";

export default function Login() {

    const { handleUserState } = useContext(userContext); 
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        fetch("api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_name: userName,
                password: password
            })
        })
        .then(response => {
            if(response.ok){
                response.json()
                handleUserState(true)
                console.log("login ok")
            } else{
                handleUserState(false)
            }
        })
        .then(loginData => {
            console.log(loginData)
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <div className='container cols-xs-12 col-sm-12 col-md-4'>
            <form>
                <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">User Name</label>
                    <input type="text"
                        className="form-control"
                        id="user_name" 
                        aria-describedby="userName"
                        onChange={(e) => {setUserName(e.currentTarget.value)}}
                        value={userName}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                        className="form-control" 
                        id="password" 
                        onChange={(e) => {setPassword(e.currentTarget.value);}}
                        value={password}
                    />
                </div>

                {/* <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={handleForm}>Submit</button>
            </form>
        </div>
    )
};