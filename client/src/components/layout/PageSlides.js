import '../css/slides.css'
import {usDateFormat} from '../hocs/util.jsx'
export default function PageSlides({resource, loading, error}) {

    const trimText = (text, maxLength)=>{
        if(text.length < maxLength){
            return text
        } else {
            return text.substring(0, maxLength).trimEnd().padEnd(maxLength+3, '...')
        }
    }

    return resource? (
    <div className="container my-4 w-90">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"
            style={{width: '100%', height: '350px', padding: '10px'}}
        >
            <div className="carousel-inner" style={{width: '100%', height: '350px'}}>

                <div className="carousel-item active ">
                    <div className="card mb-3 shadow" style={{borderRadius: '25px', height: '300px'}}>
                        <div className="row g-0">
                            <div className="col-md-4" style={{height: '300px', width: '300px'}}>
                                <img src={resource[0].pet.image_url} className="d-block w-30" alt="{resource[2].pet.name}"
                                    style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px', padding: '5px'}}
                                    />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body px-1">
                                    <h5 className="card-title fs-1 font-orange">{resource[0].pet.name.toUpperCase()}</h5>
                                    <p className="text-start mb-2">{`${resource[0].listing_type.toUpperCase()} ${resource[0].pet.species.toUpperCase()}`}</p>
                                    <p className="text-start mb-2">{`Last Seen ${usDateFormat(resource[0].listing.date_lost_found)}`}</p>
                                    <p className="text-start mb-2">{`Breed ${resource[0].pet.breed}`}</p>
                                    <p className="description">{trimText(resource[0].listing.description, 375)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="carousel-item">
                    <div className="card mb-3 shadow" style={{borderRadius: '25px', height: '300px'}}>
                        <div className="row g-0">
                            <div className="col-md-4" style={{height: '300px', width: '300px'}}>
                                <img src={resource[1].pet.image_url} className="d-block w-30" alt="{resource[2].pet.name}"
                                    style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px', padding: '5px'}}
                                    />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body px-1">
                                    <h5 className="card-title fs-1 font-orange">{resource[1].pet.name.toUpperCase()}</h5>
                                    <p className="text-start mb-2">{`${resource[1].listing_type.toUpperCase()} ${resource[1].pet.species.toUpperCase()}`}</p>
                                    <p className="text-start mb-2">{`Last Seen ${usDateFormat(resource[1].listing.date_lost_found)}`}</p>
                                    <p className="text-start mb-2">{`Breed ${resource[1].pet.breed}`}</p>
                                    <p className="text-start description">{trimText(resource[1].listing.description, 475)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="carousel-item">
                    <div className="card mb-3 shadow" style={{borderRadius: '25px', height: '300px'}}>
                        <div className="row g-0">
                            <div className="col-md-4" style={{height: '300px', width: '300px'}}>
                                <img src={resource[2].pet.image_url} className="d-block w-30" alt="{resource[2].pet.name}"
                                    style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px', padding: '5px'}}
                                    />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body px-1">
                                    <h5 className="card-title fs-1 font-orange">{resource[2].pet.name.toUpperCase()}</h5>
                                    <p className="text-start mb-2">{`${resource[2].listing_type.toUpperCase()} ${resource[2].pet.species.toUpperCase()}`}</p>
                                    <p className="text-start mb-2">{`Last Seen ${usDateFormat(resource[2].listing.date_lost_found)}`}</p>
                                    <p className="text-start mb-2">{`Breed ${resource[2].pet.breed}`}</p>
                                    <p className="text-start description">{trimText(resource[1].listing.description, 475)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="carousel-item">
                    <div className="card mb-3 shadow" style={{borderRadius: '25px', height: '300px'}}>
                        <div className="row g-0">
                            <div className="col-md-4" style={{height: '300px', width: '300px'}}>
                                <img src={resource[3].pet.image_url} className="d-block w-30" alt="{resource[2].pet.name}"
                                    style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px', padding: '5px'}}
                                    />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body px-1">
                                    <h5 className="card-title fs-1 font-orange">{resource[3].pet.name.toUpperCase()}</h5>
                                    <p className="text-start mb-2">{`${resource[3].listing_type.toUpperCase()} ${resource[3].pet.species.toUpperCase()}`}</p>
                                    <p className="text-start mb-2">{`Last Seen ${usDateFormat(resource[3].listing.date_lost_found)}`}</p>
                                    <p className="text-start mb-2">{`Breed ${resource[3].pet.breed}`}</p>
                                    <p className="text-start description">{trimText(resource[3].listing.description, 475)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/* <div style={{height: "200px"}}>

        </div> */}
    </div>
    )
    : <></>
}
