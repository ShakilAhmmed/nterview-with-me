import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";


export default function Header() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <>
            <div id="header" className="header section">
                <div className="container">

                    {/* Header Wrapper Start */}
                    <div className="header-wrapper">

                        {/* Header Logo Start */}

                        {/* <div className="header-logo">
                            <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                        </div> */}
                        {/* Header Logo End  */}

                        {/* Header Menu Start */}
                        <div className="header-menu d-none d-lg-block">
                            <ul className="main-menu">
                                <li>
                                    <Link to="/">Home</Link>
                                    {/* < href="..">Home</a> */}
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/course">Course</Link>
                                </li>
                                <li>
                                    <Link to="/quiz">Quiz</Link>
                                </li>
                            </ul>
                        </div>
                        {/* Header Menu End */}

                        {/* Header Meta Start */}
                        <div className="header-meta">

                            <div className="header-search d-none d-lg-block">
                                <form action="#">
                                    <input type="text" placeholder="Search Courses" />
                                    <button><i className="flaticon-loupe"></i></button>
                                </form>
                            </div>

                            {!isLoggedIn ?
                            <div className="header-login d-none d-lg-flex">
                                <Link to="/login"><i className="fa fa-user-o"></i> Login/</Link>
                                <Link to="/register">Register</Link>
                            </div> :
                                <div className="header-toggle d-lg-none">
                                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            }



                        </div>
                        {/* Header Meta End */}

                    </div>
                    {/* Header Wrapper End */}

                </div>
            </div>
        </>
    )
}
