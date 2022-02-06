
export default function PageFooter() {

    return (
        <>
        
        <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Contact Us
                                    </h3>
                                    <ul className="address_line">
                                        <li>+555 0000 565</li>
                                        <li><a href="/">akladyous@gmail.Com</a></li>
                                        <li>Wellington, Florida, USA</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3  col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Our Servces
                                    </h3>
                                    <ul className="links">
                                        <li><a href="/">Pet Insurance</a></li>
                                        <li><a href="/">Pet surgeries </a></li>
                                        <li><a href="/">Pet Adoption</a></li>
                                        <li><a href="/">Dog Insurance</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3  col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Quick Link
                                    </h3>
                                    <ul className="links">
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Terms of Service</a></li>
                                        <li><a href="/">Login info</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-3 ">
                                <div className="footer_widget">
                                    <div className="footer_logo">
                                        <a href="/">
                                            <img src={require ('../../images/logo.png')} alt="logo"/>
                                        </a>
                                    </div>
                                    <p className="">
                                        Flatiron Capstone Project
                                        Software Engineering
                                    </p>
                                    <div className="socail_links">
                                        {/* <ul>
                                            <li><a href="/"><i className="ti-facebook"></i></a>
                                            </li>
                                            <li><a href="/"><i className="ti-pinterest"></i></a>
                                            </li>
                                            <li><a href="/"><i className="fa fa-google-plus"></i></a>
                                            </li>
                                            <li><a href="/"><i className="fa fa-linkedin"></i></a>
                                            </li>
                                        </ul> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
        
        </>
    )

}
