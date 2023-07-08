import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

export default function CourseList() {
    const [courseCategories, setCourseCategories] = useState([]);
    const getCourseCategories = async () => {
        try {
            const {data:data} = await axios.get(`http://localhost:8000/api/v1/fetch-course-category`)
            setCourseCategories(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCourseCategories();
    }, []);
    return (
        <>
            <div className="section section-padding">
                <div className="container">

                    {/* <!-- Course List Wrapper Start --> */}
                    <div className="course-list-wrapper">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9">

                                {/* <!-- Course Top Bar Start --> */}
                                <div className="course-top-bar">
                                    <div className="course-top-text">
                                        <p>We found <span>78</span> Courses For You</p>
                                    </div>
                                    <div className="course-top-inner">
                                        <ul className="course-top-menu">
                                            <span className="label">View</span>
                                            <ul className="nav">
                                                <li><button data-bs-toggle="tab" data-bs-target="#grid"><i className="fa fa-th-large"></i></button></li>
                                                <li><button className="active" data-bs-toggle="tab" data-bs-target="#list"><i className="fa fa-th-list"></i></button></li>
                                            </ul>
                                        </ul>
                                        <div className="course-top-action">
                                            <span className="label"><i className="fa fa-align-left" aria-hidden="true"></i> Sort By:</span>
                                            <select className="select">
                                                <option data-display="Default" value="1">Default</option>
                                                <option value="1">Option 01</option>
                                                <option value="2">Option 02</option>
                                                <option value="3">Option 03</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Course Top Bar End --> */}

                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="list">
                                        {/* <!-- Course List Start --> */}
                                        <div className="course-list-items">

                                            {/* <!-- Course List Start --> */}
                                            <div className="single-course-list">
                                                {/*<div className="course-image">*/}
                                                {/*    <a href="course-details.html"><img src="assets/images/courses/courses-5.jpg" alt="Courses" /></a>*/}
                                                {/*</div>*/}
                                                <div className="course-content">
                                                    <h3 className="title"><Link to="/course-details">Design 101: Product & Web Design Course</Link></h3>
                                                    <span className="author-name">Andrew paker</span>

                                                    <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger</p>

                                                    <div className="bottom-meta">
                                                        <p className="meta-action"><i className="fa fa-clock-o"></i> Student</p>
                                                        <p className="meta-action"><i className="fa fa-signal"></i> Student</p>
                                                        <div className="rating">
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Course List End --> */}

                                        </div>
                                        {/* <!-- Course List End --> */}
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                {/* <!-- Sidebar Wrapper Start --> */}
                                <div className="sidebar-wrap-02">

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div className="sidebar-widget-02">
                                        <h3 className="widget-title">Categories</h3>

                                        <div className="widget-checkbox">
                                            <ul className="checkbox-list">
                                                {courseCategories.map(({id,name}, index) =>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id={id} />
                                                    <label className="form-check-label" for="checkbox3">{ name }</label>
                                                </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Wrapper End --> */}



                                </div>
                                {/* <!-- Sidebar Wrapper End --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Course List Wrapper End --> */}

                </div>
            </div>
        </>
    )
}
