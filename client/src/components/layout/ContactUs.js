import '../css/contact_us.css'
import {Link} from 'react-router-dom'

export default function ContactUs() {
    return (
        <div className="contact_area contact_bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact_text text-center">
                            <div className="section_title text-center">
                                <h1
                                    style={{ fontSize: "60px", color: "white" }}
                                >
                                    Pet Finder
                                </h1>
                                <p className='fs-5 text-white'>
                                    Because we know that even the best
                                    technology is only as good as the people
                                    behind it. 24/7 tech support.
                                </p>
                            </div>
                            <div className="contact_btn d-flex align-items-center justify-content-center">
                                <Link to="contactUs" className="btn" style={{border: '1px solid white', borderRadius: '25px', color: 'white'}}>
                                    Contact Us
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
