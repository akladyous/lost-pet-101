import {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { usDateFormat } from "../hocs/util.jsx";

const nullToString = (input) => {
    if (typeof input === "string") {
        return input.capitalize();
    } else {
        return "Unknown";
    }
};

export default function ListingFlyer() {
    
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const location = useLocation()
    const {resource, imagePath} = location.state


    useEffect(()=>{
            ( async ()=>{
                try{
                    const response = await axios.get('api/users/profile', 
                        {headers: {"Content-type": "application/json"}})
                    if(response.status === 200){
                        setUser(response.data)
                        console.log(user)}

                        const fylerTag = document.getElementById('flyer');
                        html2canvas(fylerTag).then(canvas =>{
                            const canvasData = canvas.toDataURL("fyler-image", 0.9)
                            const imageTag = document.createElement('a')
                            imageTag.href = canvasData;
                            imageTag.download = `petfinder-${resource.pet.name}.png`
                            imageTag.click()
                        })
                } catch(error){console.error(error.message)}
            })();
            // navigate('/')
    },[])
    
    return user ? (
        <div className='container' style={{width: '1296px', height: '1296px'}} id='flyer'>
            <div className="container" style={{width: '1024px', height: '1024px'}}>

                <div className='container'>
                    <h1 className='text-center' style={{fontSize: '80px'}}>
                        {`LOST ${resource.pet.species.toUpperCase()}`}
                    </h1>
                </div>

                <div className="container w-100 mt-4 px-2 multi-step-container border-0">
                    <div className="row">
                        <div className="col-md-7 col-lg-7 px-2 mt-2">
                            <div className="card border-0" style={{width: '100%'}}>
                                <img src={ URL.createObjectURL(imagePath)  } alt="PetImage"
                                    style={{
                                        backgroundSize: 'fill', 
                                        height: '100%', 
                                        width: '100%',
                                        objectFit:'cover', 
                                        borderRadius:'25px', 
                                        padding: '5px'}}
                                />
                            </div>
                        </div>

                        <div className="col-md-5 col-md-5 px-2 mt-2">

                            <div className="card" id="card-container">

                                <div className="card-body px-0">
                                    <div class_name="row h-100">
                                        <div className="container">
                                            <h1 className='text-center' style={{fontSize: '70px'}}>
                                                {resource.pet.name.toUpperCase()}
                                            </h1>
                                        </div>
                                        <div className="container d-flex p-1 h-100">
                                            <div className="col-md-5">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Listing Type
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Species
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Age
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Size
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Breed
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Color
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Microchip
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Height
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Weight
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Coat
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Collar
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        Last Seen
                                                    </li>
                                                    <li className="list-group-item border-0 font-bold fs-4">
                                                        LOCATION
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {resource.listing_type.toUpperCase()}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {resource.pet.species.capitalize()}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {"Unknown" && resource.pet.age}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {resource.pet.size.capitalize()}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {nullToString(resource.pet.breed)}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {nullToString(resource.pet.color)}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {"Unknown" && resource.pet.microchip}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {nullToString(resource.pet.height)}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {nullToString(resource.pet.weight)}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {nullToString(resource.pet.coat)}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {resource.pet.collar ? "Yes" : "No"}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
                                                        {usDateFormat(
                                                            resource.listing.date_lost_found
                                                        )}
                                                    </li>
                                                    <li className="list-group-item border-0 text-start font-orange-bold fs-4">
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

                            </div>
                        </div>
                    </div>

                    {/* -------- */}
                    <div className='container'>
                        <div className="container mt-2">
                            <h3 className='text-center fs-1'>
                                DESCRIPTION
                            </h3>
                            <p className='text-center fs-4'>
                                {resource.listing.description}
                            </p>
                        </div>
                        <div className="container">
                            <p className='text-center fs-4'>
                                CALL OR TEXT WITH ANY INFORMATION
                            </p>
                            <p className='text-center' style={{fontSize: '75px', fontWeight: 'bold'}}>
                                {`${user.user_profile.cell_phone}`}
                            </p>
                        </div>
                    </div>
                    {/* -------- */}
                </div> {/* MAIN TROW */}
            </div>
        </div>
    ) : null;
}
