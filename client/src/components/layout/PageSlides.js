// import {useState, useEffect} from 'react';
// import SlideWrapper from './SlideWrapper.js';
import {usDateFormat} from '../hocs/util.jsx'
export default function PageSlides({resource, loading, error}) {
    console.log(resource)
    // const [slides, setSlides] = useState(null)
    // const [slidesState, setSlidesState] = useState(null)

    // const SlideCard = ({item, index})=>{
    //     const activeSlide = index === 0 ? 'active' : ''
    //     return(
    //         <div className={`carousel-item${activeSlide}`}>
    //             <img src={item.pet.image} className="d-block w-100" alt={item.pet.name}/>
    //         </div>
    //     )
    // };, height: '250px'



    // const SlideImage = SlideWrapper(SlideCard)

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
                                <div className="card-body">
                                    <h5 className="card-title fs-1 font-orange">{resource[0].pet.name.toUpperCase()}</h5>
                                    <p className="card-text">{`${resource[0].listing_type.toUpperCase()} ${resource[0].pet.species.toUpperCase()}`}</p>
                                    <p className="card-text">{`Last Seen ${usDateFormat(resource[0].listing.date_lost_found)}`}</p>
                                    <p className="card-text">{`Breed ${resource[0].pet.breed}`}</p>
                                    <p className="word-break">{resource[0].listing.description}</p>
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
                                <div className="card-body">
                                    <h5 className="card-title fs-1 font-orange">{resource[0].pet.name.toUpperCase()}</h5>
                                    <p className="card-text">{`${resource[1].listing_type.toUpperCase()} ${resource[1].pet.species.toUpperCase()}`}</p>
                                    <p className="card-text">{`Last Seen ${usDateFormat(resource[1].listing.date_lost_found)}`}</p>
                                    <p className="card-text">{`Breed ${resource[1].pet.breed}`}</p>
                                    <p className="word-break">{resource[1].listing.description}</p>
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
                                <div className="card-body">
                                    <h5 className="card-title fs-1 font-orange">{resource[2].pet.name.toUpperCase()}</h5>
                                    <p className="card-text">{`${resource[2].listing_type.toUpperCase()} ${resource[2].pet.species.toUpperCase()}`}</p>
                                    <p className="card-text">{`Last Seen ${usDateFormat(resource[2].listing.date_lost_found)}`}</p>
                                    <p className="card-text">{`Breed ${resource[2].pet.breed}`}</p>
                                    <p className="word-break">{resource[2].listing.description}</p>
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
                                <div className="card-body">
                                    <h5 className="card-title fs-1 font-orange">{resource[3].pet.name.toUpperCase()}</h5>
                                    <p className="card-text">{`${resource[3].listing_type.toUpperCase()} ${resource[3].pet.species.toUpperCase()}`}</p>
                                    <p className="card-text">{`Last Seen ${usDateFormat(resource[3].listing.date_lost_found)}`}</p>
                                    <p className="card-text">{`Breed ${resource[3].pet.breed}`}</p>
                                    <p className="word-break">{resource[3].listing.description}</p>
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
