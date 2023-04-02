import React from 'react'
import Header from '../../Shared/Header'
import Offcanvas from '../../Shared/Offcanvas'
import PageBannerStart from './PageBannerStart'
import Footer from '../../Shared/Footer'

export default function CourseDetails() {
    return (
        <>
            <Header />
            <Offcanvas />
            <PageBannerStart />
            <div className="section section-padding">
                <div className="container">

                    <div className="row justify-content-between">
                        <div className="col-xl-7 col-lg-8">

                            {/* <!-- Course Details Wrapper Start --> */}
                            <div className="course-details-wrapper">

                                {/* <!-- Course Overview Start --> */}
                                <div className="course-overview">
                                    <h3 className="title">Course Overview</h3>
                                    <p>World-className training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-className universities and companies. from the National Research University Higher School of Economics (HSE University) is the first fully online.</p>
                                </div>
                                {/* <!-- Course Overview End --> */}

                                {/* <!-- Course Learn List Start --> */}
                                <div className="course-learn-list">
                                    <h3 className="title">What you will learn</h3>
                                    <ul>
                                        <li>Become a UX designer.</li>
                                        <li>Become a UX designer.</li>
                                        <li>You will be able to add UX designer to your CV</li>
                                        <li>You will be able to add UX designer to your CV</li>
                                        <li>Build & test a full website design.</li>
                                        <li>Build & test a full website design.</li>
                                    </ul>
                                </div>
                                {/* <!-- Course Learn List End --> */}

                                {/* <!-- Course Lessons Start --> */}
                                <div className="course-lessons">

                                    <div className="lessons-top">
                                        <h3 className="title">Course Content</h3>
                                        <div className="lessons-time">
                                            <span>10 Lessons</span>
                                            <span>6h 40m</span>
                                        </div>
                                    </div>

                                    {/* <!-- Course Accordion Start --> */}
                                    <div className="course-accordion accordion" id="accordionCourse">
                                        <div className="accordion-item">
                                            <button data-bs-toggle="collapse" data-bs-target="#collapseOne">Introduction </button>
                                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionCourse">
                                                <div className="accordion-body">
                                                    <ul className="lessons-list">
                                                        <li><a href="."><i className="fa fa-play-circle"></i> Greetings and Introductions <span>5:00</span></a></li>
                                                        <li><a href="."><i className="fa fa-play-circle"></i> 5 Business English Phrasal Verbs <span>3:17</span></a></li>
                                                        <li><a href="."><i className="fa fa-question-circle"></i> Quizz 1 : How to start?</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Analysis</button>
                                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionCourse">
                                                <div className="accordion-body">
                                                    <ul className="lessons-list">
                                                        <li><a href="."><i className="fa fa-play-circle"></i> Greetings and Introductions <span>5:00</span></a></li>
                                                        <li><a href="."><i className="fa fa-play-circle"></i> 5 Business English Phrasal Verbs <span>3:17</span></a></li>
                                                        <li><a href="."><i className="fa fa-question-circle"></i> Quizz 1 : How to start?</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Practical</button>
                                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionCourse">
                                                <div className="accordion-body">
                                                    <ul className="lessons-list">
                                                        <li><a href="."><i className="fa fa-play-circle"></i> Greetings and Introductions <span>5:00</span></a></li>
                                                        <li><a href="."><i className="fa fa-play-circle"></i> 5 Business English Phrasal Verbs <span>3:17</span></a></li>
                                                        <li><a href="."><i className="fa fa-question-circle"></i> Quizz 1 : How to start?</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Course Accordion End --> */}

                                </div>
                                {/* <!-- Course Lessons End --> */}

                                {/* <!-- Course Instructor Start --> */}
                                <div className="course-instructor">
                                    <h3 className="title">Course Instructor</h3>

                                    <div className="instructor-profile">
                                        <div className="profile-images">
                                            <img src="assets/images/author-7.jpg" alt="author" />
                                        </div>
                                        <div className="profile-content">
                                            <h5 className="name">Alena Hedge</h5>

                                            <div className="profile-meta">
                                                <div className="rating">
                                                    <div className="rating-star">
                                                        <div className="rating-active" style={{ width: '60%;' }}></div>
                                                    </div>
                                                    <span>(4.5)</span>
                                                </div>
                                                <span className="meta-action"><i className="fa fa-play-circle"></i> 10 Tutorials</span>
                                                <span className="meta-action"><i className="fa fa-user-o"></i> 134 Students</span>
                                            </div>

                                            <p>World-className training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-className universities </p>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Course Instructor End --> */}

                                {/* <!-- Course Review Start --> */}
                                <div className="course-review">
                                    <h3 className="title">Review</h3>

                                    {/* <!-- Review Rating Start --> */}
                                    <div className="review-rating">

                                        <div className="rating-box">
                                            <span className="count">5.0</span>
                                            <div className="rating-star">
                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                            </div>
                                            <p>Total 2 Ratings</p>
                                        </div>
                                        <div className="rating-percentage">

                                            {/* <!-- Course Review Start --> */}
                                            <div className="single-rating-percentage">
                                                <span className="label">5 Star</span>
                                                <div className="rating-line">
                                                    <div className="line-bar" style={{ width: '90%;' }}></div>
                                                </div>
                                                <span className="label">90%</span>
                                            </div>
                                            {/* <!-- Course Review End --> */}

                                            {/* <!-- Course Review Start --> */}
                                            <div className="single-rating-percentage">
                                                <span className="label">4 Star</span>
                                                <div className="rating-line">
                                                    <div className="line-bar" style={{ width: '40%;' }}></div>
                                                </div>
                                                <span className="label">40%</span>
                                            </div>
                                            {/* <!-- Course Review End --> */}

                                            {/* <!-- Course Review Start --> */}
                                            <div className="single-rating-percentage">
                                                <span className="label">3 Star</span>
                                                <div className="rating-line">
                                                    <div className="line-bar" style={{ width: '20%;' }}></div>
                                                </div>
                                                <span className="label">20%</span>
                                            </div>
                                            {/* <!-- Course Review End --> */}

                                            {/* <!-- Course Review Start --> */}
                                            <div className="single-rating-percentage">
                                                <span className="label">2 Star</span>
                                                <div className="rating-line">
                                                    <div className="line-bar" style={{ width: '0%;' }}></div>
                                                </div>
                                                <span className="label">0%</span>
                                            </div>
                                            {/* <!-- Course Review End --> */}

                                            {/* <!-- Course Review Start --> */}
                                            <div className="single-rating-percentage">
                                                <span className="label">1 Star</span>
                                                <div className="rating-line">
                                                    <div className="line-bar" style={{ width: '10%;' }}></div>
                                                </div>
                                                <span className="label">10%</span>
                                            </div>
                                            {/* <!-- Course Review End --> */}

                                        </div>

                                    </div>
                                    {/* <!-- Review Rating End --> */}

                                    {/* <!-- Review Items Start --> */}
                                    <div className="review-items">
                                        <ul>
                                            <li>
                                                {/* <!-- Single Review Start --> */}
                                                <div className="single-review">
                                                    <div className="review-author">
                                                        <img src="assets/images/author-1.jpg" alt="Author" />
                                                    </div>
                                                    <div className="review-content">
                                                        <div className="review-top">
                                                            <h4 className="name">David Gea</h4>
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span className="date">4 Months Ago</span>
                                                        </div>
                                                        <p>World-className training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-className.</p>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Review End --> */}
                                            </li>
                                            <li>
                                                {/* <!-- Single Review Start --> */}
                                                <div className="single-review">
                                                    <div className="review-author">
                                                        <img src="assets/images/author-3.jpg" alt="Author" />
                                                    </div>
                                                    <div className="review-content">
                                                        <div className="review-top">
                                                            <h4 className="name">David Gea</h4>
                                                            <div className="rating-star">
                                                                <div className="rating-active" style={{ width: '60%;' }}></div>
                                                            </div>
                                                            <span className="date">4 Months Ago</span>
                                                        </div>
                                                        <p>World-className training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-className.</p>
                                                    </div>
                                                </div>
                                                {/* <!-- Single Review End --> */}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Review Items End --> */}

                                </div>
                                {/* <!-- Course Review End --> */}

                            </div>
                            {/* <!-- Course Details Wrapper End --> */}

                        </div>

                        <div className="col-lg-4">
                            {/* <!-- Sidebar Wrapper Start --> */}
                            <div className="sidebar-details-wrap">

                                {/* <!-- Sidebar Details Video Description Start --> */}
                                <div className="sidebar-details-video-description">
                                    <div className="sidebar-video">
                                        <img src="assets/images/sidebar-video.jpg" alt="video" />
                                        <a href="https://youtu.be/cdZHQFCqK3g" className="play videoLightbox"><i className="fa fa-play"></i></a>
                                    </div>
                                    <div className="sidebar-description">
                                        <div className="price">
                                            <span className="sale-price">$49.99</span>
                                            <span className="regular-price">$102</span>
                                        </div>
                                        <a className="btn btn-primary btn-hover-heading-color w-100" href=".">Add To Cart</a>
                                        <ul className="description-list">
                                            <li><i className="fa fa-clock-o"></i> Duration <span>52 mins</span></li>
                                            <li><i className="fa fa-sliders"></i> Level <span>Expert</span></li>
                                            <li><i className="fa fa-file-o"></i> Lectures <span>4 Lectures</span></li>
                                            <li><i className="fa fa-language"></i> Language <span>English</span></li>
                                            <li><i className="fa fa-user-o"></i> Enrolled <span>4 Enrolled</span></li>
                                        </ul>
                                        <a className="btn btn-outline-primary w-100" href="."><i className="fa fa-share"></i> Share This Course</a>
                                    </div>
                                </div>
                                {/* <!-- Sidebar Details Video Description End --> */}

                                {/* <!-- Sidebar Course Start --> */}
                                <div className="sidebar-details-course">
                                    <h4 className="sidebar-details-title">Releted Courses</h4>

                                    <ul className="sidebar-details-courses">
                                        <li>
                                            {/* <!-- Single Course Start --> */}
                                            <div className="sidebar-course-item">
                                                <div className="item-image">
                                                    <a href="course-details.html"><img src="assets/images/courses/courses-1.jpg" alt="Courses" /></a>
                                                </div>
                                                <div className="item-content">
                                                    <h3 className="title"><a href="course-details.html">Cupidatat non proident sunt culpa officia deserunt</a></h3>
                                                    <span className="price">Price  <strong>$45</strong></span>
                                                </div>
                                            </div>
                                            {/* <!-- Single Course End --> */}
                                        </li>
                                        <li>
                                            {/* <!-- Single Course Start --> */}
                                            <div className="sidebar-course-item">
                                                <div className="item-image">
                                                    <a href="course-details.html"><img src="assets/images/courses/courses-2.jpg" alt="Courses" /></a>
                                                </div>
                                                <div className="item-content">
                                                    <h3 className="title"><a href="course-details.html">Cupidatat non proident sunt culpa officia deserunt</a></h3>
                                                    <span className="price">Price  <strong>$45</strong></span>
                                                </div>
                                            </div>
                                            {/* <!-- Single Course End --> */}
                                        </li>
                                        <li>
                                            {/* <!-- Single Course Start --> */}
                                            <div className="sidebar-course-item">
                                                <div className="item-image">
                                                    <a href="course-details.html"><img src="assets/images/courses/courses-3.jpg" alt="Courses" /></a>
                                                </div>
                                                <div className="item-content">
                                                    <h3 className="title"><a href="course-details.html">Cupidatat non proident sunt culpa officia deserunt</a></h3>
                                                    <span className="price">Price  <strong>$45</strong></span>
                                                </div>
                                            </div>
                                            {/* <!-- Single Course End --> */}
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Sidebar Course End --> */}

                            </div>
                            {/* <!-- Sidebar Wrapper End --> */}
                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
}
