import '../css/about.css'
import {Link} from 'react-router-dom'
import PageFooter from './PageFooter.js'

export default function About() {
    return (
        <div className="main_container">
            <header className="header-area header-bg">
                <div className="container">
                    <div className="row">
                        <h2 className="display-5 text-light text-center">
                            About Us
                        </h2>
                    </div>
                </div>
            </header>

            {/* --------------------------- */}
            <div className="pet_care_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="pet_thumb">
                                <img
                                    src={require("../../images/pet_care.png")}
                                    alt="gattino"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-6">
                            <div className="pet_info">
                                <div className="section_title">
                                    <h1>Pet Finder</h1>
                                    <p>
                                        PetFinder is people helping cats, dogs
                                        and wild animals go home and thrive
                                        whether home is the family room or the
                                        forest. We do this by rehabilitating
                                        orphaned and injured wildlife,
                                        sheltering and adopting homeless cats
                                        and dogs, and educating the community to
                                        inspire compassionate action for
                                        animals.
                                    </p>
                                    <Link to="/about" className="btn btn-lg about_btn" id='about_btns' role='button'>
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------- */}



            <div className="adapt_area mb-4">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <div className="adapt_help">
                                <div className="section_title">
                                    <h3>Flatiron Capstone Project</h3>
                                    {/* <p></p> */}
                                    <p>February 18, 2022, New York</p>
                                    <Link to="/about" className="btn btn-lg about_btn" id='about_btns' role='button'>
                                        Feedback
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="adapt_about">
                                <div className="row align-items-center ">
                                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center" style={{height: '408px'}}>
                                        <div className="text-center shadow" style={{height: '200px', width: '200px' ,borderRadius: '25px'}}>
                                            <div className='my-5 d-flex justify-content-center' style={{}}>
                                                <img className='icons' src={require("../../images/bootstrap.png")} alt="bootstrap" style={{height: '100px', objectFit:'fill'}}/>
                                                {/* <h3>Bootstrap</h3> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center" style={{height: '408px'}}>
                                        <div className="text-center shadow" style={{height: '200px', width: '200px' ,borderRadius: '25px'}}>
                                            <div className='my-5 d-flex justify-content-center' style={{}}>
                                                <img className='icons' src={require("../../images/react.png")} alt="react" style={{height: '100px', objectFit:'fill'}}/>
                                                {/* <h3>React</h3> */}
                                            </div>
                                        </div>
                                        <div className="text-center shadow" style={{height: '200px', width: '200px' ,borderRadius: '25px'}}>
                                            <div className='my-5 d-flex justify-content-center' style={{}}>
                                                <img className='icons' src={require("../../images/rails.png")} alt="rails" style={{height: '100px', objectFit:'fill'}}/>
                                                {/* <h3>Rails</h3> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PageFooter />

        </div>
    );
}
