import {useState, useEffect} from 'react';
import apiRequest from './apiRequest.js';

export default function useAxiosPost(path, postData) {
    const [resource , setResource] = useState()
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    
    useEffect( () =>{
        const dataJson = JSON.stringify(postData)
        console.log("dataJson: ", dataJson)
        const controller = new AbortController();
        apiRequest.post(path, 
            dataJson,
            {signal: controller.signal}
        )
        .then(response => {
            if(response.status === 200){
                console.log("response: ", response)
                // console.log("response data: ", response.data)
                setResource(response.data)
            }
        })
        .catch(error =>{
            if(error.response){
                setErrorMsg(`Response Error ${error.response.statusText} ${error.response.status}`)
                console.log(errorMsg)
            } else if (error.request){
                setErrorMsg(error.request)
                console.log("Server Error : ", error.request)
            } else{
                setErrorMsg('The request was made but no response was received')
                // setErrorMsg(error.message)
            }
            // console.log(error.config);
        })
        return ()=>{
            setLoading(false)
            setErrorMsg(false)
            controller.abort()
        }
    },[] )
    
    return {resource, loading, errorMsg}



}
