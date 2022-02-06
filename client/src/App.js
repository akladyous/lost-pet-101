// import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
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
import UserSignup from './components/user/UserSignup.js'
import UserAccount from './components/user/UserAccount.js'
import './App.css';

function App() {
    return (
        <div className="App">
            <Root>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="lost_found" element={<LostFound />} />
                    <Route path="detail" element={<LostFoundInfo />} />
                    <Route path="create_listing" element={<PostListing />} />
                    <Route path="flyer" element={<ListingFlyer />} />
                    <Route path="users" element={<UserHeader />}>
                        <Route path="login" element={<UserLogin />} />
                        <Route path="logout" element={< null/>} />
                        <Route path="signup" element={<UserSignup />} />
                        <Route path="account" element={<UserAccount />} />
                    </Route>
                </Routes>
            </Root>
        </div>
    );
}

export default App;
