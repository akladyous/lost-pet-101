import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostListingSuccess(props) {
    const {
        // currentIndex,
        // lastIndex,
        formData,
        petImage,
        imagePath
    } = props || {};


    const [resource , setResource] = useState()
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    
    const postData = async () => {
        const resourceJS = JSON.stringify(formData);
        const controller = new AbortController();
        const config = {
            headers: {"Content-type": "application/json"},
            signal: controller.signal
        }
        // return axios.post('api/listing_infos/public', resourceJS, config);
        try {
            const response = await  axios.post('api/listing_infos/public', resourceJS, config)
            if (response.status === 200){
                console.log("response: ", response);
                console.log("response data: ", response.data);
                console.log("resources values: ", resource);
                setResource(response.data);
                return await response.data
                } else{
                    console.log(response)
                }
        } catch (err){
            // console.error(err.message)
        }
    };

    const postImage = async (data, image_file) =>{
        const imageForm = new FormData()
        imageForm.append("image_file", image_file);
        imageForm.append('id', data.pet.id)
        const controller = new AbortController();
        const config = {
            headers: { 'content-type': 'multipart/form-data'},
            signal: controller.signal,
        };
        try{
            const response = await axios.patch("api/pets/image", imageForm, config)
                if (response.status === 200) {
                    console.log("response: ", response);
                    console.log("response data: ", response);
                    return await response.data
                } else {
                    console.log(response)
                }

        } catch(err) {
            console.log(err.message)
        }
        
    };

    useEffect( () =>{

        postData()
            .then(formResponse => {
                console.log(formResponse);
                setResource(formResponse);
                postImage(formResponse, imagePath)
                .then(image_response =>{
                    console.log(image_response);
                    // console.log(image_response);
                });

            })
        return ()=>{
            setLoading(false)
            setErrorMsg(false)
            // controller.abort()
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
