// import '../css/lost_found.css'
import {useRef} from 'react';
import PageHeader from '../layout/PageHeader.js';
import { Modal } from 'bootstrap';
import {useLocation} from 'react-router-dom'
import { usDateFormat } from "../hocs/util.jsx";
import ContactFinder from './ContactFinder.js';


const dogImg = require('../../images/dog1.jpeg')
const nullToString = (input) =>{
    if(typeof input === 'string'){
        return input.capitalize()
    } else{return 'Unknown'}
}
export default function LostFoundInfo(params) {


    const modalRef = useRef();

    const openModal = () => {
        const modalX = new Modal(modalRef.current, {
            backdrop: true,
            keyboard: true,
            focus: true,
        });
        modalX.show();
    };

    const closeModal = () => {
        const modalX = Modal.getOrCreateInstance(modalRef.current);
        modalX.hide();
    };


    
    const location = useLocation();
    const listing = location.state
    
    return (
        <div>
            <PageHeader
                title="LOST & FOUND PETS"
                subTitle="SEARCH LOST & FOUND PETS IN YOUR AREA"
            />

            <div className="container">
                <div className="card-group px-10">
                    <div
                        className="card m-2 border-warning rounded"
                        // style={{ borderRadius: "15px" }}
                    >
                        <img
                            className="img-fluid img-thumbnail d-block p-2 rounded"
                            src={dogImg}
                            alt="DogImage"
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    {/* ------------------------------------------------------ */}
                    <div
                        className="card m-2 border border-warning"
                        // style={{ minWidth: "25rem", borderRadius: "15px" }}
                    >
                        <div
                            className="card-header fs-4 fw-bold"
                            style={{ backgroundColor: "hsl(25,100%,50%)" }}
                        >
                            {listing.pet.name.toUpperCase()}
                        </div>

                        <div class_name="row">
                            <div className="container d-flex">
                                <div className="col-md-3">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item border-0">
                                            Listing Type
                                        </li>
                                        <li className="list-group-item border-0">
                                            Species
                                        </li>
                                        <li className="list-group-item border-0">
                                            Age
                                        </li>
                                        <li className="list-group-item border-0">
                                            Size
                                        </li>
                                        <li className="list-group-item border-0">
                                            Breed
                                        </li>
                                        <li className="list-group-item border-0">
                                            Color
                                        </li>
                                        <li className="list-group-item border-0">
                                            Microchip
                                        </li>
                                        <li className="list-group-item border-0">
                                            Height
                                        </li>
                                        <li className="list-group-item border-0">
                                            Weight
                                        </li>
                                        <li className="list-group-item border-0">
                                            Coat
                                        </li>
                                        <li className="list-group-item border-0">
                                            Collar
                                        </li>
                                        <li className="list-group-item border-0">
                                            Published At
                                        </li>
                                        <li className="list-group-item border-0">
                                            Last Seen
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-9">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item border-0 text-start">
                                            {listing.listing_type.toUpperCase()}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {listing.pet.species.capitalize()}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {"Unknown" && listing.pet.age}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {listing.pet.size.capitalize()}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {nullToString(listing.pet.breed)}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {nullToString(listing.pet.color)}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {"Unknown" && listing.pet.microchip}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {nullToString(listing.pet.height)}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {nullToString(listing.pet.weight)}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {nullToString(listing.pet.coat)}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {listing.pet.collar ? "Yes" : "No"}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {usDateFormat(listing.published_at)}
                                        </li>
                                        <li className="list-group-item border-0 text-start">
                                            {`
                                            ${nullToString(
                                                listing.listing_address.address1
                                            )} 
                                            ${nullToString(
                                                listing.listing_address.city
                                            )} 
                                            ${nullToString(
                                                listing.listing_address.state
                                            )}
                                            ${nullToString(
                                                listing.listing_address.zip_code
                                            )}
                                            `}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 mx-2">
                    <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#contactFinderModal"
                        style={{ backgroundColor: "hsl(25,100%,50%)" }}
                        onClick={openModal}
                    >
                        Contact Finder
                    </button>
                </div>
            </div>

            <ContactFinder modalRef={modalRef} onClose={closeModal} />
        </div>
    );
}
