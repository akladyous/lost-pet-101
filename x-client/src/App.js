// import { Routes, Route} from "react-router-dom";
import Root from "./component/layout/Root.js";
import Header from "./component/layout/Header.js";
import Home from "./component/layout/Home.js";
import About from "./component/layout/About.js";
// import Login from "./component/users/Login.js";
import Account from "./component/users/Account.js";

function App() {
    return (
        <div className="App">
            <Root>
                {/* <Header /> */}
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />
                    <Route path="account" element={<Account />} />
                    <Route path="logout" element={null} />
                </Routes> */}

                {/* <Home></Home> */}


                {/* <Home></Home> */}
            </Root>
        </div>
    );
}

export default App;
