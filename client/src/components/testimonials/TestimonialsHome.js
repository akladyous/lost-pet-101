import '../css/testimonials.css'
import { Outlet, useLocation } from 'react-router-dom';
import PageHeader from '../layout/PageHeader.js';
import PageFooter from '../layout/PageFooter.js';

export default function Testimonials() {
    const location = useLocation()
    const title = location.state

    return (
        <>
            <PageHeader subTitle="Testimonials" />
            <Outlet />
            <PageFooter></PageFooter>
        </>
    );
    
}
