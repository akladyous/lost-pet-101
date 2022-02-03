import React from 'react';
import { usDateFormat } from "../hocs/util.jsx";
import { Link, Outlet, useNavigate } from "react-router-dom";

// String.prototype.capitalize = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// };
// export const usDateFormat = (date) => {
//     return new Date(date).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//     });
// };

const capitalize = (input)=>{
    return input.charAt(0).toUpperCase() + this.slice(1);
}

export default function ListingCard({listing}) {

    const navigate = useNavigate()

    return (
        <div
            className="card m-2"
            style={{
                minWidth: "20rem",
                maxWidth: "20rem",
                borderRadius: "25px",
                border: "1px solid var(--orange)",
            }}
        >
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title fs-4 fw-bold text-center font-orange-bold">
                    {listing.pet.name.toUpperCase()}
                </h5>
                {/* <p className="card-text">Some quick example text.</p> */}
            </div>
            <ul className="list-group list-group-flush"
                style={{border: '0px'}}
            >
                <li className="list-group-item d-flex flex-column">
                    <p>
                        {`${listing.listing_type} ${listing.pet.species} ${listing.pet.gender}`}
                    </p>
                    <p>
                        {`${"" || listing.listing_address.city} ${
                            "" || listing.listing_address.state
                        } ${"" || listing.listing_address.zip_code}`}
                    </p>
                    <p>{usDateFormat(listing.listing.date_lost_found)}</p>
                </li>
            </ul>
            <div className="card-body">
                {/* <Link className="btn btn-lg btn-light" to={`/lost_found/${listing.id}`} key={listing.id}> */}
                {/* <Link className="btn btn-lg btn-light" to={`/lost_found/${listing.id}`} key={listing.id} listing={listing}> */}
                <Link
                    className="btn btn-lg btn-light border-orange"
                    to="/detail"
                    key={listing.id}
                    state={listing}
                >
                    View Details
                </Link>
                {/* <button
                    type="button"
                    className="btn btn-light"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        navigate("detail", { state: listing });
                        console.log("click");
                    }}
                >
                    View Details
                </button> */}
            </div>
        </div>
    );
}