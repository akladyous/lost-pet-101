// import '../../index.css'
import '../css/header.css'
import { Outlet, useLocation } from 'react-router-dom';
import PageHeader from '../layout/PageHeader.js';
import PageFooter from '../layout/PageFooter.js';

export default function UserHeader() {
    const location = useLocation()
    const subTitle = location.state;

    return (
        <>
            {/* <header className="header-area header-bg">
                <div className="container">
                    <div className="row">
                        <h2 className="display-5 text-light text-center">
                            {title}
                        </h2>
                    </div>
                </div>
            </header> */}
            <PageHeader
                title="LOST & FOUND PETS"
                // subTitle="SEARCH LOST & FOUND PETS IN YOUR AREA"
                subTitle={subTitle}
            />
            <Outlet />

            <PageFooter></PageFooter>
        </>
    );
    
}
