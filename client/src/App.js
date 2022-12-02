import './App.css';
// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import util from './components/hocs/util.jsx'
import Root from './components/layout/Root.js'
import Header from './components/layout/Header.js'
import About from './components/layout/About.js'
import Home from './components/layout/Home.js'
import LostFound from "./components/listing/LostFound.js";
import LostFoundInfo from "./components/listing/LostFoundInfo.js";
import PostListing from "./components/listing/PostListing.js";
import ListingFlyer from "./components/listing/ListingFlyer.js";
import UserHeader from "./components/user/UserHeader.js";
import UserLogin from './components/user/UserLogin.js'
import UserLogout from './components/user/UserLogout.js';
import UserSignup from './components/user/UserSignup.js'
import UserAccount from './components/user/UserAccount.js'
import Feedback from './components/layout/Feedback.js';
import withResource from './components/hocs/withResource.js'
import withResourceDelete from './components/hocs/withResourceDelete.js';
import TestimonialsHome from './components/testimonials/TestimonialsHome.js'
import Testimonials from './components/testimonials/Testimonials.js';
const WithUser = withResource(ListingFlyer, 'users/profile')
const WithListingInfos = withResource(Testimonials, "listing_founds");
const Logout = withResourceDelete(UserLogout, 'logout')

function App() {
    return (
        <div className="App">
            <Root>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="feedback" element={<Feedback />} />
                    <Route path="lost_found" element={<LostFound />} />
                    <Route path="detail" element={<LostFoundInfo />} />
                    <Route path="create_listing" element={<PostListing />} />
                    <Route path="flyer" element={<WithUser />} />
                    <Route path="users" element={<UserHeader />}>
                        <Route path="login" element={<UserLogin />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="signup" element={<UserSignup />} />
                        <Route path="account" element={<UserAccount />} />
                    </Route>
                    <Route path="testimonials" element={<TestimonialsHome />}>
                        <Route index element={<WithListingInfos />} />
                    </Route>
                </Routes>
            </Root>
        </div>
    );
}

export default App;
