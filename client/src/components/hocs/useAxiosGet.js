import axios from 'axios';
import {useState, useEffect} from 'react'

export default function useAxiosGet(path) {

    const [resource , setResource] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    useEffect( () =>{
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
                    // console.log("response: ", response)
                    // console.log("response data: ", response.data)
                }
            } catch(error){setErrorMsg(error.message)}
        })();

        return ()=>{
            setLoading(false)
            controller.abort()
        }
    },[] )
    
    return {resource, loading, errorMsg}
}
