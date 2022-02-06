import '../../index.css'
import { Outlet, useLocation } from 'react-router-dom';
import PageFooter from '../layout/PageFooter.js';

export default function UserHeader() {
    const location = useLocation()
    const title = location.state

    return (
        <>
            <header className="header-area header-bg">
                <div className="container">
                    <div className="row">
                        <h2 className="display-5 text-light text-center">
                            {title}
                        </h2>
                    </div>
                </div>
            </header>

            <PageFooter></PageFooter>
            <Outlet />
        </>
    );
    
}
