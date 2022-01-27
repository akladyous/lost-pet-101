import React from 'react';

export default function Home({children}) {
    return(
        <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/assets/lulu.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="/assets/bobby.jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
            
            {children}
        </div>
    )
}
