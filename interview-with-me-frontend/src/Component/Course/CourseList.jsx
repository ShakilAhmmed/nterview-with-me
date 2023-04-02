import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseList() {
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
                                    <div className="tab-pane fade" id="grid">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                {/* <!-- Single Courses Start --> */}
                                                <div className="single-course">
                                                    <div className="courses-image">
                                                        <a href="course-details.html">
                                                            <img src="assets/images/courses/courses-1.jpg" alt="Courses" />
                                                        </a>
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="top-meta">
                                                            <a className="tag" href=".">Beginner</a>
                                                            <span className="price">
                                                                <span className="sale-price">Free</span>
                                                            </span>
                                                        </div>
                                                        <h3 className="title">
                                                            <Link to="/course-details">Design 101: Product & Web Design Course</Link>
                                                            </h3>
                                                        <p className="author-name">Andrew paker</p>
                                                    </div>
                                                    <div className="courses-meta">
                                                        <p className="student"><i className="fa fa-user-o"></i> 10 Student</p>
                                                        <div className="rating">
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Courses End --> */}
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                {/* <!-- Single Courses Start --> */}
                                                <div className="single-course">
                                                    <div className="courses-image">
                                                        <a href="course-details.html"><img src="assets/images/courses/courses-2.jpg" alt="Courses" /></a>
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="top-meta">
                                                            <a className="tag" href=".">Beginner</a>
                                                            <span className="price">
                                                                <span className="sale-price">Free</span>
                                                            </span>
                                                        </div>
                                                        <h3 className="title"><Link to="/course-details">Design 101: Product & Web Design Course</Link></h3>
                                                        <p className="author-name">Andrew paker</p>
                                                    </div>
                                                    <div className="courses-meta">
                                                        <p className="student"><i className="fa fa-user-o"></i> 10 Student</p>
                                                        <div className="rating">
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Courses End --> */}
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                {/* <!-- Single Courses Start --> */}
                                                <div className="single-course">
                                                    <div className="courses-image">
                                                        <a href="course-details.html"><img src="assets/images/courses/courses-3.jpg" alt="Courses" /></a>
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="top-meta">
                                                            <a className="tag" href=".">Beginner</a>
                                                            <span className="price">
                                                                <span className="sale-price">Free</span>
                                                            </span>
                                                        </div>
                                                        <h3 className="title"><Link to="/course-details">Design 101: Product & Web Design Course</Link></h3>
                                                        <p className="author-name">Andrew paker</p>
                                                    </div>
                                                    <div className="courses-meta">
                                                        <p className="student"><i className="fa fa-user-o"></i> 10 Student</p>
                                                        <div className="rating">
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Courses End --> */}
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                {/* <!-- Single Courses Start --> */}
                                                <div className="single-course">
                                                    <div className="courses-image">
                                                        <a href="course-details.html"><img src="assets/images/courses/courses-4.jpg" alt="Courses" /></a>
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="top-meta">
                                                            <a className="tag" href=".">Beginner</a>
                                                            <span className="price">
                                                                <span className="sale-price">Free</span>
                                                            </span>
                                                        </div>
                                                        <h3 className="title"><Link to="/course-details">Design 101: Product & Web Design Course</Link></h3>
                                                        <p className="author-name">Andrew paker</p>
                                                    </div>
                                                    <div className="courses-meta">
                                                        <p className="student"><i className="fa fa-user-o"></i> 10 Student</p>
                                                        <div className="rating">
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Courses End --> */}
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                {/* <!-- Single Courses Start --> */}
                                                <div className="single-course">
                                                    <div className="courses-image">
                                                        <a href="course-details.html"><img src="assets/images/courses/courses-5.jpg" alt="Courses" /></a>
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="top-meta">
                                                            <a className="tag" href={{ width: '60%;' }}>Beginner</a>
                                                            <span className="price">
                                                                <span className="sale-price">Free</span>
                                                            </span>
                                                        </div>
                                                        <h3 className="title"><Link to="/course-details">Design 101: Product & Web Design Course</Link></h3>
                                                        <p className="author-name">Andrew paker</p>
                                                    </div>
                                                    <div className="courses-meta">
                                                        <p className="student"><i className="fa fa-user-o"></i> 10 Student</p>
                                                        <div className="rating">
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Courses End --> */}
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                {/* <!-- Single Courses Start --> */}
                                                <div className="single-course">
                                                    <div className="courses-image">
                                                        <a href="course-details.html"><img src="assets/images/courses/courses-6.jpg" alt="Courses" /></a>
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="top-meta">
                                                            <a className="tag" href=".">Beginner</a>
                                                            <span className="price">
                                                                <span className="sale-price">Free</span>
                                                            </span>
                                                        </div>
                                                        <h3 className="title"><Link to="/course-details">Design 101: Product & Web Design Course</Link></h3>
                                                        <p className="author-name">Andrew paker</p>
                                                    </div>
                                                    <div className="courses-meta">
                                                        <p className="student"><i className="fa fa-user-o"></i> 10 Student</p>
                                                        <div className="rating">
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Courses End --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="list">
                                        {/* <!-- Course List Start --> */}
                                        <div className="course-list-items">

                                            {/* <!-- Course List Start --> */}
                                            <div className="single-course-list">
                                                <div className="course-image">
                                                    <a href="course-details.html"><img src="assets/images/courses/courses-5.jpg" alt="Courses" /></a>
                                                </div>
                                                <div className="course-content">
                                                    <div className="top-meta">
                                                        <a className="tag" href=".">Beginner</a>
                                                        <span className="price">
                                                            <span className="sale-price">Free</span>
                                                        </span>
                                                    </div>
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

                                            {/* <!-- Course List Start --> */}
                                            <div className="single-course-list">
                                                <div className="course-image">
                                                    <a href="course-details.html"><img src="assets/images/courses/courses-6.jpg" alt="Courses" /></a>
                                                </div>
                                                <div className="course-content">
                                                    <div className="top-meta">
                                                        <a className="tag" href=".">Beginner</a>
                                                        <span className="price">
                                                            <span className="sale-price">Free</span>
                                                        </span>
                                                    </div>
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

                                            {/* <!-- Course List Start --> */}
                                            <div className="single-course-list">
                                                <div className="course-image">
                                                    <a href="course-details.html"><img src="assets/images/courses/courses-7.jpg" alt="Courses" /></a>
                                                </div>
                                                <div className="course-content">
                                                    <div className="top-meta">
                                                        <a className="tag" href=".">Beginner</a>
                                                        <span className="price">
                                                            <span className="sale-price">Free</span>
                                                        </span>
                                                    </div>
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

                                {/* <!-- Page Pagination Start --> */}
                                <div className="page-pagination">
                                    <ul className="pagination justify-content-center">
                                        <li><a href="."><i className="fa fa-angle-left"></i></a></li>
                                        <li><a href=".">1</a></li>
                                        <li><a className="active" href=".">2</a></li>
                                        <li><a href=".">3</a></li>
                                        <li><span>...</span></li>
                                        <li><a href="."><i className="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- Page Pagination End --> */}

                            </div>
                            <div className="col-lg-3">
                                {/* <!-- Sidebar Wrapper Start --> */}
                                <div className="sidebar-wrap-02">

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div className="sidebar-widget-02">
                                        <h3 className="widget-title">Type of Courses</h3>

                                        <div className="widget-checkbox">
                                            <ul className="checkbox-list">
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox1" />
                                                    <label className="form-check-label" for="checkbox1">Free (11)</label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox2" />
                                                    <label className="form-check-label" for="checkbox2">Paid (11)</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Wrapper End --> */}

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div className="sidebar-widget-02">
                                        <h3 className="widget-title">Categories</h3>

                                        <div className="widget-checkbox">
                                            <ul className="checkbox-list">
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox3" />
                                                    <label className="form-check-label" for="checkbox3">Technology (11)</label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox4" />
                                                    <label className="form-check-label" for="checkbox4">Business (07)</label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox5" />
                                                    <label className="form-check-label" for="checkbox5">Development (11)</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Wrapper End --> */}

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div className="sidebar-widget-02">
                                        <h3 className="widget-title">Instructor</h3>

                                        <div className="widget-checkbox">
                                            <ul className="checkbox-list">
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox6" />
                                                    <label className="form-check-label" for="checkbox6">Jimmy Jason (11)</label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox7" />
                                                    <label className="form-check-label" for="checkbox7">Harnold (07)</label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox8" />
                                                    <label className="form-check-label" for="checkbox8">Eric Madny (11)</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Wrapper End --> */}

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div className="sidebar-widget-02">
                                        <h3 className="widget-title">Ratings</h3>

                                        <div className="widget-checkbox">
                                            <ul className="checkbox-list">
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox9" />
                                                    <label className="form-check-label" for="checkbox9">
                                                        <div className="rating">
                                                            <div className="rating-on" style={{ width: '100%;' }}></div>
                                                        </div> (4.5)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox10" />
                                                    <label className="form-check-label" for="checkbox10">
                                                        <div className="rating">
                                                            <div className="rating-on" style={{ width: '60%;' }}></div>
                                                        </div> (3.5)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox11" />
                                                    <label className="form-check-label" for="checkbox11">
                                                        <div className="rating">
                                                            <div className="rating-on" style={{ width: '40%;' }}></div>
                                                        </div> (2)
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Wrapper End --> */}

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div className="sidebar-widget-02">
                                        <h3 className="widget-title">Lavel</h3>

                                        <div className="widget-checkbox">
                                            <ul className="checkbox-list">
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox12" />
                                                    <label className="form-check-label" for="checkbox12">Beginner (11)</label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkbox13" />
                                                    <label className="form-check-label" for="checkbox13">Advanced (07)</label>
                                                </li>
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
