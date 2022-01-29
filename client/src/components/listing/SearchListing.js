import React from 'react';
import {useState} from 'react';
import ListingMapper from './ListingMapper.js';
import ListingCard from './ListingCard.js';
import ListingtContainer from './ListingContainer.js';
import {useLocation, Outlet} from 'react-router-dom'

export default function SearchListing() {

    const [listingInfo, setListingInfo] = useState([])

    function handleForm(e) {
        e.preventDefault()
        fetch(`api/listing_infos/public`, 
            { method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
            }})
        .then(response => response.json())
        .then(data => {
            setListingInfo(data);
            // console.log(data)
        })
    };
    return (
        <div className="container mt-2">
                <div className="card" style={{ borderRadius: "15px" }}>
                    <div
                        className="card-header"
                        style={{ backgroundColor: "hsl(25,100%,50%)" }}
                    >
                        Featured
                    </div>
                    <div className="card-body">
                        <div className="">
                            <div className="row">
                                <div className="col-md-3">
                                    <label
                                        className="text-start"
                                        htmlFor="pet_type"
                                    >
                                        Pet Type
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="pet_name">Pet Name</label>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="pet_breed">Breed</label>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="pet_color">Color</label>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <form>
                                <div className="row">
                                    <div className="col-md-3">
                                        <select
                                            className="form-select"
                                            aria-label="select pet"
                                        >
                                            <option defaultValue>dog</option>
                                            <option value="1">cat</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="pet name"
                                            aria-label="pet name"
                                            aria-describedby="basic-addon2"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            className="form-select"
                                            aria-label="select pet"
                                        >
                                            <option defaultValue>all</option>
                                            <option value="1">dog</option>
                                            <option value="1">cat</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            className="form-select"
                                            aria-label="select pet"
                                        >
                                            <option defaultValue>all</option>
                                            <option value="1">cat</option>
                                            <option value="1">cat</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <button
                                            type="submit"
                                            className="btn"
                                            style={{
                                                backgroundColor:
                                                    "hsl(25,100%,50%)",
                                            }}
                                            onClick={handleForm}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ListingtContainer>
                    {listingInfo && (
                        <ListingMapper
                            itemComponent={ListingCard}
                            listingInfo={listingInfo}
                        />
                    )}
                    {/* <ListingMapper itemComponent={PetCards} listingInfo={listingInfo} /> */}
                </ListingtContainer>
            </div>
    )
}
