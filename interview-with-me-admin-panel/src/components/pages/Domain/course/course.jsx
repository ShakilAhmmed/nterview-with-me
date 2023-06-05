import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../../../interceptors/http";
import CourseForm from "./courseForm";
import CourseList from "./courseList";

const Course = () => {

    const courseForm = useFormik({

        initialValues : {
            name : '',
            status : '',
            course_category_id: ''
        },
        validationSchema: Yup.object({
            course_category_id: Yup.string().required('Course Category Is Required'),
            name: Yup.string().required('Name Is Required'),
            status: Yup.string().required('Status Is Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            values['status'] = values['status'] === "1";
            http.post(`/courses`, values)
                .then(() => {
                    toast.success("Course Added Successfully");
                    resetForm({values: ''});
                })
                .catch(({error}) => {
                    console.log(error)
                });
        },
    });

    const [courseCategories, setCourseCategories] = useState([]);
    const [courses, setCourses] = useState([]);

    const getCourseCategories = async () => {
        try {
            const {data:data} = await http.get(`/fetch-course-category`)
            setCourseCategories(data);
        } catch (error) {
            console.log(error)
        }
    }

    const getCourses = async () => {
        try {
            const {data:data} = await http.get(`/courses`)
            setCourses(data.data);
        } catch (error) {
            console.log(error)
        }
    }
    
    const editCourse = async (id) => {
        try {
            
        } catch (exception) {
            
        }
    }

    useEffect(() => {
        getCourseCategories();
        getCourses();
    }, []);

  return (
      <>
          <div className="row mt-5">
              <ToastContainer/>
              <div className="col-lg-4">
                    <CourseForm courseForm={courseForm} courseCategories={courseCategories} />
              </div>
              <div className="col-lg-8">
                    <CourseList courses={courses} />
              </div>
          </div>
      </>
  );
}
export default Course;