import { useState, createContext } from "react";

export const userContext = createContext();

export default function UserProvider({children}) {
    
    const [userState, setUserState] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    
    const handleUserState = (value) =>{
        setUserState(value)
    }
    const handleUserEmail = (value) =>{
        setUserEmail(value)
    }

    return(
        <userContext.Provider value={{
            userState,
            userEmail,
            handleUserState,
            handleUserEmail,
        }}>
            {children}
        </userContext.Provider>
    )
}
