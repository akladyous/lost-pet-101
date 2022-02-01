import {useState, useEffect} from 'react'
import apiRequest from './apiRequest.js';

export default function useAxiosGet(path) {
    const [resource , setResource] = useState()
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')


    useEffect( () =>{

        const controller = new AbortController();
        
        apiRequest.get(path, {
            signal: controller.signal
        })
        .then(response => {
            if(response.status === 200){
                setResource(response.data)
                console.log("response: ", response)
                console.log("response data: ", response.data)
            }

        })
        .then(data => {
            setResource(data)
            setLoading(false)
        }).catch(error =>{
            if(error.response){
                setErrorMsg(`Response Error ${error.response.statusText, error.response.status}`)
                console.log(errorMsg)
            } else if (error.request){
                setErrorMsg(error.request)
                console.log("Server Error : ", error.request)
            } else{
                setErrorMsg('The request was made but no response was received')
                // setErrorMsg(error.message)
            }
            console.log(error.config);
        })
        return ()=>{
            setLoading(false)
            controller.abort()
        }
    },[] )
    
    return {resource, loading, errorMsg}
}
