import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../../../interceptors/http";
import CourseQuestionForm from "./courseQuestionForm";
import CourseQuestionList from "./courseQuestionList";

const CourseQuestion = () => {
    const courseQuestionForm = useFormik({

        initialValues : {
            course_id : '',
            content_category_id : '',
            question: '',
            choice_one: '',
            choice_two: '',
            choice_three: '',
            choice_four: '',
            correct_choice: '',
        },
        validationSchema: Yup.object({
            course_id: Yup.string().required('Course Is Required'),
            content_category_id: Yup.string().required('Course Category Is Required'),
            question: Yup.string().required('Question Is Required'),
            choice_one: Yup.string().required('Choice One Is Required'),
            choice_two: Yup.string().required('Choice Two Is Required'),
            choice_three: Yup.string().required('Choice Three Is Required'),
            choice_four: Yup.string().required('Choice Four Is Required'),
            correct_choice: Yup.string().required('Correct Choice Is Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            http.post(`/course-question`, values)
                .then(() => {
                    toast.success("Course Question Added Successfully");
                    resetForm({values: ''});
                })
                .catch(({error}) => {
                    console.log(error)
                });
        },
    });

    const [courseContentCategories, setCourseContentCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [courseQuestions, setCourseQuestions] = useState([]);

    const getCourseContentCategories = async () => {
        try {
            const {data:data} = await http.get(`/fetch-course-content-category`)
            setCourseContentCategories(data);
        } catch (error) {
            console.log(error)
        }
    }

    const getCourses = async () => {
        try {
            const {data:data} = await http.get(`/fetch-courses`)
            setCourses(data);
        } catch (error) {
            console.log(error)
        }
    }

    const getCourseQuestion = async () => {
        try {
            const {data:data} = await http.get(`/course-question`)
            setCourseQuestions(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const editCourseQuestion = async () => {
        try {

        } catch (error) {

        }
    }

    useEffect(() => {
        getCourseContentCategories();
        getCourses();
        getCourseQuestion();
    }, []);

    return (
        <>
            <div className="row mt-5">
                <ToastContainer/>
                <div className="col-lg-4">
                    <CourseQuestionForm
                        courseQuestionForm={courseQuestionForm}
                        courseContentCategories={courseContentCategories}
                        courses={courses}
                    />
                </div>
                <div className="col-lg-8">
                    <CourseQuestionList
                        courseQuestions={courseQuestions}
                        editCourseQuestion={editCourseQuestion}
                    />
                </div>
            </div>
        </>
    );
}

export default CourseQuestion;