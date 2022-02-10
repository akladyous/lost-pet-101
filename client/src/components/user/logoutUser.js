import { useEffect, useState } from "react";

export const LogoutUser = () => {

    const [userState, setUserState] = useState(null);

    debugger
    useEffect(()=>{
        fetch("api/users/logout", { method: "DELETE" })
        .then(
            (response) => {
                if (response.ok) {
                    response.json()
                    setUserState(true);
                    // console.log("logout");
                } else {
                    setUserState(false);
                }
            }
        ).catch(err => {
            console.error(err)
        })
    },[]);
    return userState;
}