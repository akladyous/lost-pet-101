import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ResourceWrapper({ children, path}) {

    const [resource, setResource] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect( ()=>{
        const controller = new AbortController();
            ( async ()=>{
                try{
                    setLoading(true)
                    const response = await axios.get(path, 
                        {headers: {"Content-type": "application/json"},
                        signal: controller.signal}
                        )
                    if(response.status === 200){
                        setResource(response.data)
                        setLoading(false)
                        }
                } catch(error){setError(error.message)}
            })();

            return ()=>{
                setLoading(false)
                controller.abort()
            }
    },[] )

    return (
            <>
            {React.Children.map(children, child =>{
                if (React.isValidElement(child)){
                    return React.cloneElement(child, {resource, loading, error})
                }
                return child;
            })}
    </>
    )
}
