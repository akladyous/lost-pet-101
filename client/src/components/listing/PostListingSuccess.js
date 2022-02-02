import { useEffect, useState } from 'react';
import apiRequest from '../hocs/apiRequest.js';

export default function PostListingSuccess(props) {
    const {
        // currentIndex,
        // lastIndex,
        formData,
        petImage
    } = props || {};


    const [resource , setResource] = useState()
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')


    useEffect( () =>{
        const resourceJS = JSON.stringify(formData)
        console.log("dataJson: ", formData)
        const controller = new AbortController();
        apiRequest.post('listing_infos/public', 
            resourceJS,
            {signal: controller.signal}
        )
        .then(response => {
            if(response.status === 200){
                console.log("response: ", response)
                console.log("response data: ", response.data)
                setResource(response.data)
                console.log("resources values: ", resource)
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



    return(
        <div className="card h-100" style={{ borderColor: "var(--orange)" }}>
            <div className="row w-100 h-100 mx-auto d-flex align-content-between">
                <div className='card text-center'>
                    <div className='card-header'>
                        Listing posted successfully
                    </div>
                    <h2 className='card-title'>
                        Pet name
                    </h2>
                    <img src={petImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
