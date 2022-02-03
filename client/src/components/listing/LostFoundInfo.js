// import '../css/lost_found.css'
import {useRef} from 'react';
import PageHeader from '../layout/PageHeader.js';
import { Modal } from 'bootstrap';
import {useLocation} from 'react-router-dom'
import { usDateFormat } from "../hocs/util.jsx";
import ContactFinder from './ContactFinder.js';

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
                <div className="card-group">
                    <div className="card m-2 border-0">
                        <img
                            className="img-fluid img-thumbnail d-block p-2 border-orange"
                            src={listing.pet.image_url}
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
                        className="card my-2 border-orange"
                        style={{border: '1px solid var(--orange)', borderRadius: '25px'}}
                    >
                        <div
                            className="card-header fs-4 font-orange-bold"
                            style={{border: '0px'}}
                        >
                            {listing.pet.name.toUpperCase()}
                        </div>

                        <div class_name="row">
                            <div className="container d-flex">
                                <div className="col-md-3">
                                    <ul className="list-group list-group-flush">
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
                                            Published At
                                        </li>
                                        <li className="list-group-item border-0 font-bold">
                                            Last Seen
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-9">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {listing.listing_type.toUpperCase()}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {listing.pet.species.capitalize()}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {"Unknown" && listing.pet.age}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {listing.pet.size.capitalize()}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(listing.pet.breed)}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(listing.pet.color)}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {"Unknown" && listing.pet.microchip}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(listing.pet.height)}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(listing.pet.weight)}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(listing.pet.coat)}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {listing.pet.collar ? "Yes" : "No"}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {usDateFormat(listing.published_at)}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
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
