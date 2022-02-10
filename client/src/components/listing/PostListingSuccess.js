import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import html2canvas from "html2canvas";
import { usDateFormat } from "../hocs/util.jsx";
import FlyerBody from './FlyerBody.js';

const nullToString = (input) => {
    if (typeof input === "string") {
        return input.capitalize();
    } else {
        return "Unknown";
    }
};


export default function PostListingSuccess(props) {
    const {
        formData,
        imagePath,
        formTitles
    } = props || {};

    const [flyerState, setFlyerState] = useState(false)
    const [user, setUser] = useState(null)
    const [resource , setResource] = useState(null)
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
                setResource(response.data);
                return await response.data
                } else{
                    console.log(response)
                }
        } catch (err){
            console.error(err.message)
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
                    setLoading(false)
                });

            }).finally(()=>{
                setLoading(false)
                setErrorMsg(false)
                // controller.abort()

            })
        // return ()=>{
        // }
    },[] )
    
    const generateFlyer = useCallback( async ()=>{
        setFlyerState(true);
        try{
            const response = await axios.get('users/profile', 
            {headers: {"Content-type": "application/json"}})
            if (response.status === 200) {
                setUser(response.data);
                console.log(user);

                const fylerTag = document.getElementById("flyer");
                html2canvas(fylerTag).then((canvas) => {
                    const canvasData = canvas.toDataURL("fyler-image", 0.9);
                    const imageTag = document.createElement("a");
                    imageTag.href = canvasData;
                    // imageTag.download = `petfinder-${resource.pet.name}.png`;
                    imageTag.download = "flyer.png";
                    imageTag.click();
                    setFlyerState(false);
                });
            }
        } catch(error){console.error(error.message)}

    },[flyerState] )

    return resource ? (
        <>
            <div className="card h-100" id="card-container">
                <div className="card-header fs-4" id="card-container-header">
                    {formTitles}
                </div>
                <div className="card-body px-0">
                    <div class_name="row h-100">
                        <div className="container d-flex p-1 h-100">
                            <div className="col-md-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 font-bold">
                                        Pet name
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Listing Type
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Species
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Age
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Size
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Breed
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Color
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Microchip
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Height
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Weight
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Coat
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Collar
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Last Seen
                                    </li>
                                    <li className="list-group-item border-0 font-bold">
                                        Last Seen
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {resource.pet.name.toUpperCase()}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {resource.listing_type.toUpperCase()}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {resource.pet.species.capitalize()}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {"Unknown" && resource.pet.age}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {resource.pet.size.capitalize()}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {nullToString(resource.pet.breed)}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {nullToString(resource.pet.color)}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {"Unknown" && resource.pet.microchip}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {nullToString(resource.pet.height)}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {nullToString(resource.pet.weight)}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {nullToString(resource.pet.coat)}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {resource.pet.collar ? "Yes" : "No"}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {usDateFormat(
                                            resource.listing.date_lost_found
                                        )}
                                    </li>
                                    <li className="list-group-item border-0 text-start font-orange-bold">
                                        {`
                                            ${nullToString(
                                                resource.listing_address
                                                    .address1
                                            )}
                                            ${nullToString(
                                                resource.listing_address.city
                                            )} 
                                            ${nullToString(
                                                resource.listing_address.state
                                            )}
                                            ${nullToString(
                                                resource.listing_address
                                                    .zip_code
                                            )}
                                            `}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* --------------- */}
                </div>

                <div className="card-footer bg-none" style={{ background: "none", border: "0px" }}>
                    <Link className="btn" id="button-orange" to="/flyer" key={resource.id} state={{resource, imagePath}}>
                        Generate Flyer....
                    </Link>
                </div>
            </div>
        </>
    ) : (
        <p>Loading</p>
    );

};