// import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import util from './components/api/util.jsx'
import Root from './components/layout/Root.js'
import Header from './components/layout/Header.js'
import About from './components/layout/About.js'
import Login from './components/user/Login.js'
import Home from './components/layout/Home.js'
import LostFound from "./components/listing/LostFound.js";
import LostFoundInfo from "./components/listing/LostFoundInfo.js";

import './App.css';

function App() {
    return (
        <div className="App">
            <Root>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="lost_found" element={<LostFound />} />
                    <Route path="detail" element={<LostFoundInfo />} />
                </Routes>
            </Root>
        </div>
    );
}

export default App;
