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
                maxWidth: "300px",
                maxHeight: "750px",
                borderRadius: "25px",
                border: "1px solid var(--orange)",
                padding: "0px",
            }}
        >
            <img
                className="card-img-top img-fluid"
                src={listing.pet.image_url}
                alt={listing.pet.name}
                style={{
                    height: "400px",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    border: "none",
                    objectFit: "cover",
                }}
            />

            <div className="card-body py-2 h">
                <h5 className="card-title fs-4 fw-bold text-center font-orange-bold">
                    {listing.pet.name.toUpperCase()}
                </h5>
                {/* <p className="card-text">Some quick example text.</p> */}
            </div>

            <ul
                className="list-group list-group-flush border-0">
                <li className="list-group-item border-0">
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="px-2" style={{borderRadius: "25px", background: "var(--orange)",}}>
                            <p className="fw-bold fs-5 mb-1">
                                {`${listing.listing_type.toUpperCase()}`}
                            </p>
                        </div>
                        <div className="mx-2">
                            <p className=" fs-5 mb-1">
                                {`${listing.pet.species.toUpperCase()} ${listing.pet.gender.toUpperCase()}`}
                            </p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item border-0">
                    <div className="d-flex justify-content-start align-items-center">
                        <p className="fs-5">
                            {`${"" || listing.listing_address.city} ${
                                "" || listing.listing_address.state
                            }`}
                        </p>
                    </div>
                </li>
                <li className="list-group-item border-0">
                    <div className="d-flex justify-content-start align-items-center">
                        <p className="fs-5">
                            {`Last Seen ${usDateFormat(
                                listing.listing.date_lost_found
                            )}`}
                        </p>
                    </div>
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