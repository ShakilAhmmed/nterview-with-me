import Header from "../Shared/Header";
import Offcanvas from "../Shared/Offcanvas";
import React, {useEffect, useState} from "react";
import {default as ReactSelect} from "react-select";
import Select from "react-select";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import http from "../interceptors/http";
import {current} from "@reduxjs/toolkit";
import {array} from "yup";

export default function Quiz() {
    const [courses, setCourse] = useState([]);
    const [courseSelect, selectedCourse] = useState([]);

    const getCourse = async () => {
        try {
            const {data: data} = await http.get(`frontend/fetch-course`)
            setCourse(data);
        } catch (error) {
            console.log(error)
        }
    }

    function handleCourseSelect(course, index) {
        selectedCourse(current => [...current, {course_id:course.id,name:course.name}]);
    }

   async function handleJump(){
        try {
            const {data} = await http.post(`question-generate`,courseSelect);
            console.log(data,'data')
        } catch (error) {
            console.log(error)
        }
    }

    console.log(courseSelect, 'courseSelect')

    useEffect(() => {
        // openModal();
        getCourse();
    }, []);

    return (
        <>
            <Header/>
            <Offcanvas/>

            <div className="section section-padding">
                <div className="container">
                    <div className='row'>
                        {courses.map((course, index) => {
                            return (
                                <div className="col-lg-2" style={{margin: '1%'}} key={course.id}>
                                    <div className="card" style={courseSelect.some(item => parseInt(item.course_id) === parseInt(course.id)) ?
                                        {boxShadow: '0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23)'} : {}}>
                                        <button
                                            className='btn btn-sm btn-primary'
                                            onClick={() => handleCourseSelect(course, index)}
                                        >{course.name}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className='row' style={{marginTop: '5%'}}>
                        <div className='col-md-6'></div>
                        <div className='col-md-1'>
                            <button className='btn btn-sm btn-info text-center' onClick={() => handleJump()}>JUMP</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}