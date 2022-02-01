import {useState, useEffect} from 'react';

export function useFetchPost(path, data=null) {

    const [resource , setResource] = useState()
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    
    useEffect( () =>{

        fetch(`api/${path}`, 
            { method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setResource(data)
            })

    }, [] )
    return {resource};
}
