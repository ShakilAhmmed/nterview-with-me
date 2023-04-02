import LeftBarTab from "./layouts/LeftBarTab";
import TopBar from "./layouts/TopBar";
import RightBar from "./layouts/RightBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                <LeftBarTab/>
                <TopBar/>
                <div className="page-wrapper">
                    <div className="page-content-tab">
                        <div className="container-fluid">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                            </Routes>
                        </div>
                        <RightBar/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;