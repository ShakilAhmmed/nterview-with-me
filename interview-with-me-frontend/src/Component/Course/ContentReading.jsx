import Header from "../../Shared/Header";
import Offcanvas from "../../Shared/Offcanvas";
import PageBannerStart from "./PageBannerStart";
import React, {useEffect, useState} from "react";
import {Link, Route, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import parse from 'html-react-parser';
import http from "../../interceptors/http";


export default function ContentReading() {
    let navigate = useNavigate();
    const {courseId, id} = useParams();
    const [courseRead, setCourseRead] = useState([]);
    const [courseContentCategory, setCourseContentCategory] = useState([]);
    const [isContentRead, setContentRead] = useState(false);

    const getReadContent = async () => {
        try {
            const {data: data} = await http.get(`/frontend/fetch-reading-content/${courseId}/${id}`)
            if (data.data.id) {
                setCourseRead(data.data);
                await contentReadComplete(data.data.id);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCourseContent = async () => {
        try {
            const {data: data} = await http.get(`/frontend/fetch-course-contents/${courseId}`)
            setCourseContentCategory(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    function nextFunction(courseRead) {
        let path = `/course-content-reading/${courseRead.courseId}/${courseRead.id + 1}`;
        navigate(path);
        window.location.reload();
    }

    function previousFunction(courseRead) {
        let path = `/course-content-reading/${courseRead.courseId}/${courseRead.id - 1}`;
        navigate(path);
        window.location.reload();
    }

    const contentRead = async(content) => {
        let path = `/course-content-reading/${content.courseId}/${content.id}`;
        await contentReadComplete(content.id);
        navigate(path);
        window.location.reload();
    }

    const contentComplete = async (courseRead) => {
        try {
            const values = {
                course_id : courseRead.courseId,
                course_content_id : courseRead.id
            }
            const {data: data} = await http.post(`/course-progress`,values);
            if (data.code === 201){
                setContentRead(false);
                await contentReadComplete(courseRead.id)
            }

            if (data.code === 200){
                setContentRead(true);
                await contentReadComplete(courseRead.id)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const contentReadComplete = async(id) => {
        try {
            const {data: data} = await http.get(`/is-content-complete/${id}`);
            if (data.data){
                setContentRead(true);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getReadContent();
        getCourseContent();
    }, []);
    return (
        <>
            <Header/>
            <Offcanvas/>
            <PageBannerStart name={courseRead.contentTitle} />

            <div className="section section-padding">
                <div className="container">

                    {/* <!-- Course List Wrapper Start --> */}
                    <div className="course-list-wrapper">
                        <div className="row">
                            <div className="col-lg-3">
                                {/* <!-- Sidebar Wrapper Start --> */}
                                <div>

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div>
                                        <h3 className="widget-title">Contents</h3>

                                        <div className="course-accordion accordion" id="accordionCourse">
                                            {courseContentCategory.map((category) =>
                                                <div className="accordion-item" key={category.id}>
                                                    <button data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne">{category.contentCategoryTitle} </button>
                                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                                         data-bs-parent="#accordionCourse">
                                                        <div className="accordion-body">
                                                            {category.courseContent.map((content) =>
                                                                <ul className="lessons-list" key={content.id}>
                                                                    <a onClick={() => contentRead(content)}>
                                                                        {content.contentTitle}
                                                                    </a>
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Wrapper End --> */}


                                </div>
                                {/* <!-- Sidebar Wrapper End --> */}
                            </div>
                            <div className="col-lg-9">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="list">
                                        {/* <!-- Course List Start --> */}
                                        <div className="course-list-items">
                                            <div className="course-content">
                                                <h3 className="title">
                                                    {courseRead.contentTitle}
                                                </h3>
                                                <p>
                                                     <span dangerouslySetInnerHTML={{__html: courseRead.content}}>
                                                        </span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: '5%'}}>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-2'>
                                <button className="outlined-default m-0 h-11 navigation-text"
                                        style={{backgroundColor: 'white', padding: '2%'}}
                                        onClick={() => previousFunction(courseRead)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="icon-left">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                    <span>Back</span>
                                    <span className="tailwind-hidden ml-1.5 sm:inline"></span>
                                </button>
                            </div>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-2'>
                                <div style={{
                                    boxSizing: 'content-box',
                                    width: '100%',
                                    border: '2px solid grey',
                                    padding: '2%',
                                    marginLeft: '45%'
                                }}>
                                    <input type='checkbox' checked={isContentRead} name='is_checked' style={{marginLeft: '6%'}} onChange={() => contentComplete(courseRead)}/>
                                    Mark As Completed
                                </div>
                            </div>
                            <div className='col-lg-2'>
                                <button className="outlined-primary m-0 h-11"
                                        style={{backgroundColor: 'white', padding: '2%', float: 'right'}}
                                        onClick={() => nextFunction(courseRead)}>
                                    <span>Next<span className="tailwind-hidden sm:inline"></span></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="icon-right order-last">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}