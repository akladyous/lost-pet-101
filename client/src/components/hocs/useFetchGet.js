import { useState, useEffect } from "react"

export const useFetchGet = (path) => {

    const [resource, setResource] = useState()

    useEffect( () => {
        fetch(`api/${path}`, 
            { method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
            }})
        .then(response => response.json())
        .then(data => {
            setResource(data)
            console.log(data)
        });
    },[] )

    return {resource}
}
