import React from 'react';
import { usDateFormat } from "../hocs/util.jsx";
import { Link } from "react-router-dom";
import '../css/listingCard.css'

export default function ListingCard({listing}) {

    return (
        <div className="card m-2 card-area">
            <div className="pet-image-area">
                <img className="card-img-top img-fluid" src={listing.pet.image_url} alt={listing.pet.name}/>
            </div>

            <div className="card-area-detail">
                <div className="row">
                    <p className="text-start my-1 font-orange-bold">
                        {listing.pet.name.toUpperCase()}
                    </p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-start my-1">
                            {`${listing.listing_type.toUpperCase()} `}
                            {`${listing.pet.species.toUpperCase()} ${listing.pet.gender.toUpperCase()}`}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-start my-1">
                            {`${"" || listing.listing_address.city.toUpperCase()} ${
                                "" || listing.listing_address.state.toUpperCase()
                            }`}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-start my-1">
                            {`LAST SEEN ${usDateFormat(listing.listing.date_lost_found)}`}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-1 my-1">
                <Link
                    className="btn btn-light border-orange"
                    to="/detail"
                    key={listing.id}
                    state={listing}
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}