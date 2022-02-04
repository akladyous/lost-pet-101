import { useRef, useContext } from "react";
import PageHeader from '../layout/PageHeader.js';
import { Modal } from 'bootstrap';
import {useLocation} from 'react-router-dom'
import { usDateFormat } from "../hocs/util.jsx";
import ContactFinder from './ContactFinder.js';
import ResourceWrapper from '../hocs/ResourceWrapper.js';
import { userContext } from "../user/UserProvider.js";

const nullToString = (input) =>{
    if(typeof input === 'string'){
        return input.capitalize()
    } else{return 'Unknown'}
}
export default function LostFoundInfo(params) {

    const { userState } = useContext(userContext);
    const modalButton = useRef()
    
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
    const listingInfo = location.state

    const userLogged = () =>{
        if(userState){
            return true
        } else{
            return false
        }
    }
    
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
                            src={listingInfo.pet.image_url}
                            alt="DogImage"
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* ------------------------------------------------------ */}
                    <div
                        className="card my-2 border-orange"
                        style={{
                            border: "1px solid var(--orange)",
                            borderRadius: "25px",
                        }}
                    >
                        <div
                            className="card-header fs-4 font-orange-bold"
                            style={{ border: "0px" }}
                        >
                            {listingInfo.pet.name.toUpperCase()}
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
                                            {listingInfo.listing_type.toUpperCase()}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {listingInfo.pet.species.capitalize()}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {"Unknown" && listingInfo.pet.age}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {listingInfo.pet.size.capitalize()}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(
                                                listingInfo.pet.breed
                                            )}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(
                                                listingInfo.pet.color
                                            )}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {"Unknown" &&
                                                listingInfo.pet.microchip}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(
                                                listingInfo.pet.height
                                            )}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(
                                                listingInfo.pet.weight
                                            )}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {nullToString(listingInfo.pet.coat)}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {listingInfo.pet.collar
                                                ? "Yes"
                                                : "No"}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {usDateFormat(
                                                listingInfo.published_at
                                            )}
                                        </li>
                                        <li className="list-group-item border-0 text-start font-orange-bold">
                                            {`
                                            ${nullToString(
                                                listingInfo.listing_address
                                                    .address1
                                            )} 
                                            ${nullToString(
                                                listingInfo.listing_address.city
                                            )} 
                                            ${nullToString(
                                                listingInfo.listing_address
                                                    .state
                                            )}
                                            ${nullToString(
                                                listingInfo.listing_address
                                                    .zip_code
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
                        disabled={userState === true ? "" : "disable"}
                        // ref={modalButton}
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
            {
                userState && 
            <ResourceWrapper path={"api/users/profile"}>
                <ContactFinder
                    modalRef={modalRef}
                    onClose={closeModal}
                    path={"api/users/profile"}
                    // listingInfo={listingInfo}
                />
            </ResourceWrapper>
            }
        </div>
    );
}
