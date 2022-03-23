import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { usDateFormat } from "../hocs/util.jsx";

const nullToString = (input) => {
    if (typeof input === "string") {
        return input.capitalize();
    } else {
        return "Unknown";
    }
};

export default function ListingFlyer(props) {
    const {data: user} = props || {}
    
    const location = useLocation()
    const {resource, imagePath} = location.state


    const generateFlyer = ()=>{
        const fylerTag = document.getElementById("flyer");
        html2canvas(fylerTag).then((canvas) => {
            const canvasData = canvas.toDataURL("fyler-image", 0.9);
            const imageTag = document.createElement("a");
            imageTag.href = canvasData;
            imageTag.download = `petfinder-${resource.pet.name}.png`;
            imageTag.click();
        });
    }

    return user ? (
        <>
            <div className="container d-flex mt-3">
                <button className='btn mx-auto border-orange' onClick={generateFlyer}>Generate Flyer</button>
            </div>
            <div
                className="container"
                style={{ width: "1296px", height: "1296px", marginTop: "15px" }}
                id="flyer"
            >
                <div
                    className="container mt-3"
                    style={{ width: "1024px", height: "1024px" }}
                >
                    <div
                        className="container d-flex flex-column justify-content-center mt-3"
                        style={{
                            border: "1px solid var(--orange)",
                            height: "150px",
                            borderRadius: "25px",

                        }}
                    >
                        <h1
                            className="text-center font-orange"
                            style={{ fontSize: "80px" }}
                        >
                            {`LOST ${resource.pet.species.toUpperCase()}`}
                        </h1>
                    </div>
                    {/* ----------------- */}
                    <div
                        className="container p-2 border-0"
                        style={{ height: "700px" }}
                    >
                        <div className="row">
                            <div
                                className="col-md-7 col-lg-7 px-2 mt-2"
                                style={{ height: "700px" }}
                            >
                                <div
                                    className="card border-0"
                                    style={{ height: "100%" }}
                                >
                                    <img
                                        src={URL.createObjectURL(imagePath)}
                                        alt="PetImage"
                                        style={{
                                            backgroundSize: "fill",
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "cover",
                                            borderRadius: "25px",
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                className="col-md-5 col-md-5 px-2 mt-2"
                                style={{ height: "700px" }}
                            >
                                <div
                                    className="card"
                                    id="card-container"
                                    style={{ height: "100%" }}
                                >
                                    <div className="card-body px-0">
                                        <div class_name="row h-100">
                                            <div className="container">
                                                <h1
                                                    className="text-center"
                                                    style={{ fontSize: "70px" }}
                                                >
                                                    {resource.pet.name.toUpperCase()}
                                                </h1>
                                            </div>
                                            <div className="container d-flex p-1 h-100">
                                                <div className="col-md-5">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Listing Type
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Species
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Age
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Size
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Breed
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Color
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Microchip
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Height
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Weight
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Coat
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Collar
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            Last Seen
                                                        </li>
                                                        <li className="list-group-item border-0 font-bold fs-6">
                                                            LOCATION
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-7">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {resource.listing_type.toUpperCase()}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {resource.pet.species.capitalize()}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {"Unknown" &&
                                                                resource.pet
                                                                    .age}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {resource.pet.size.capitalize()}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {nullToString(
                                                                resource.pet
                                                                    .breed
                                                            )}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {nullToString(
                                                                resource.pet
                                                                    .color
                                                            )}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {"Unknown" &&
                                                                resource.pet
                                                                    .microchip}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {nullToString(
                                                                resource.pet
                                                                    .height
                                                            )}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {nullToString(
                                                                resource.pet
                                                                    .weight
                                                            )}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {nullToString(
                                                                resource.pet
                                                                    .coat
                                                            )}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {resource.pet.collar
                                                                ? "Yes"
                                                                : "No"}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {usDateFormat(
                                                                resource.listing
                                                                    .date_lost_found
                                                            )}
                                                        </li>
                                                        <li className="list-group-item border-0 text-start font-orange-bold fs-6">
                                                            {`
                                                                ${nullToString(
                                                                    resource
                                                                        .listing_address
                                                                        .address1
                                                                )}
                                                                ${nullToString(
                                                                    resource
                                                                        .listing_address
                                                                        .city
                                                                )} 
                                                                ${nullToString(
                                                                    resource
                                                                        .listing_address
                                                                        .state
                                                                )}
                                                                ${nullToString(
                                                                    resource
                                                                        .listing_address
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
                    </div>{" "}
                    {/* ----------------- */}
                    {/* ------- */}
                    <div className="row my-4 p-2  d-flex flex-column justify-content-center">
                        <div
                            className="container"
                            style={{
                                height: "300px",
                                border: "1px solid var(--orange)",
                                borderRadius: "25px",
                            }}
                        >
                            <div className="container mt-2">
                                <h3 className="text-center fs-1 font-orange">
                                    DESCRIPTION
                                </h3>
                                <p className="text-center fs-6">
                                    {resource.listing.description.toUpperCase()}
                                </p>
                            </div>
                            <div className="container">
                                <p className="text-center fs-6 ">
                                    CALL OR TEXT WITH ANY INFORMATION
                                </p>
                            </div>
                            <div className="container">
                                <p
                                    className="text-center font-orange mb-0"
                                    style={{
                                        fontSize: "75px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {`${user.user_profile.cell_phone}`}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ------- */}
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}
