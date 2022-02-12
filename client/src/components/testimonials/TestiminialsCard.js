import React from 'react'

export default function TestiminialsCard({testimonial, index}) {

    return (
        <div className="row- d-flex border my-3 signle-testimonial">

            <div className="col-5 ">
                <div className="testimonial-img-area">
                    <img className="img-fluid" src={testimonial.pet.image_url} alt="" />
                </div>
            </div>
            
            <div className="col-7">
                <div className="testimonial-detail d-flex flex-column ">
                    <div className='flex-shrink-0'>
                        <h2 className='heading'>{testimonial.pet.name.toUpperCase()}</h2>
                    </div>
                    <div className='h-100 flex-grow-1'>
                        <p className='text-wrap p-2'>{testimonial.listing_comment.comment}</p>
                    </div>
                    <div className='flex-shrink-0'>
                        <button type="button" className="btn position-relative">
                        <i className='fa-solid fa-heart fa-1x'>
                            <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill ">
                                {testimonial.listing_comment.likes}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
