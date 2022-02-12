import { useNavigate } from "react-router-dom"

    export default function TestimonialsAside() {
        const navigate = useNavigate()
    return (
        <div className="testimonials-right-side">
            <aside className="testimonial-services">
                <form className='py-4'>
                    <div className="w-80">
                        <div className="input-group py-1 px-4">
                            <input type="text" className="form-control input py-3" placeholder='Search Keyword'
                                />
                        </div>
                        <div className='py-1 px-4'>
                            <button className="button w-100 py-3"type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </aside>
            {/* -------- */}
            <aside className="testimonial-services">
                    <div className='py-4'>
                        <div className='py-1 px-4'>
                            <button className="button w-100 py-3"type="submit" onClick={()=>{navigate("/create_listing");}}>
                                Report Lost or Found
                            </button>
                        </div>
                        <div className='py-1 px-4'>
                            <button className="button w-100 py-3"type="submit" onClick={()=>{navigate("/create_listing");}}>
                                Generate Flyer
                            </button>
                        </div>
                    </div>
            </aside>

            {/* -------- */}
            <aside className="testimonial-services">
                <div className='py-4'>
                    <div className='py-1 px-4'>
                        <h4 className='text-center'>
                            Recently Added
                        </h4>
                    </div>
                    <div className='py-1 px-4'>

                    </div>
                </div>
            </aside>                        
        </div> // testimonials-right-side
    )
}
