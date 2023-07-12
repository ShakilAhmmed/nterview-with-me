import Header from "../../Shared/Header";
import Offcanvas from "../../Shared/Offcanvas";
import PageBannerStart from "./PageBannerStart";
import React, {useEffect, useState} from "react";
import {Link, Route, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function ContentReading(){
    let navigate = useNavigate();
    const {courseId,id } = useParams();
    const [courseRead, setCourseRead] = useState([]);
    const [courseContentCategory, setCourseContentCategory] = useState([]);

    const getReadContent = async () => {
        try {
            const {data:data} = await axios.get(`http://localhost:8000/api/v1/frontend/fetch-reading-content/${courseId}/${id}`)
            setCourseRead(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getCourseContent = async () => {
        try {
            const {data:data} = await axios.get(`http://localhost:8000/api/v1/frontend/fetch-course-contents/${courseId}`)
            setCourseContentCategory(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    function nextFunction(courseRead){
        let path = `/course-content-reading/${courseRead.courseId}/${courseRead.id+1}`;
        navigate(path);
        window.location.reload();
    }

    function previousFunction(courseRead){
        let path = `/course-content-reading/${courseRead.courseId}/${courseRead.id-1}`;
        navigate(path);
        window.location.reload();
    }

    function contentRead(content){
        let path = `/course-content-reading/${content.courseId}/${content.id}`;
        navigate(path);
        window.location.reload();
    }

    useEffect(() => {
        getReadContent();
        getCourseContent();
    }, []);
    return (
        <>
            <Header />
            <Offcanvas />
            <PageBannerStart  />

            <div className="section section-padding">
                <div className="container">

                    {/* <!-- Course List Wrapper Start --> */}
                    <div className="course-list-wrapper">
                        <div className="row">
                            <div className="col-lg-3">
                                {/* <!-- Sidebar Wrapper Start --> */}
                                <div >

                                    {/* <!-- Sidebar Wrapper Start --> */}
                                    <div>
                                        <h3 className="widget-title">Contents</h3>

                                        <div className="course-accordion accordion" id="accordionCourse">
                                            {courseContentCategory.map((category) =>
                                                <div className="accordion-item" key={category.id}>
                                                    <button data-bs-toggle="collapse" data-bs-target="#collapseOne">{category.contentCategoryTitle} </button>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionCourse">
                                                        <div className="accordion-body">
                                                            {category.courseContent.map((content) =>
                                                                <ul className="lessons-list" key={content.id}>
                                                                    <a onClick={() => contentRead(content)}> {content.contentTitle} </a>
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
                                                <p>{courseRead.content}</p>
                                            </div>

                                        </div>
                                        {/* <!-- Course List End --> */}
                                    </div>
                                </div>

                                    <a className="btn-sm btn-primary" type="button"
                                       onClick={() => previousFunction(courseRead)}>Previous</a>
                                    <a className="btn-sm btn-primary" style={{ float:"right" }}
                                            onClick={() => nextFunction(courseRead)}>Next</a>


                            </div>

                        </div>
                    </div>
                    {/* <!-- Course List Wrapper End --> */}

                </div>
            </div>
        </>
    )
}