import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../../../interceptors/http";
import CourseContentForm from "./courseContentForm";
import CourseContentList from "./courseContentList";

const CourseContent = () => {

    const courseContentForm = useFormik({

        initialValues : {
            course_id : '',
            content_category_id : '',
            content_title: '',
            content: '',
        },
        validationSchema: Yup.object({
            course_id: Yup.string().required('Course Is Required'),
            content_category_id: Yup.string().required('Course Category Is Required'),
            content_title: Yup.string().required('Title Is Required'),
            content: Yup.string().required('Content Is Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            http.post(`/course-content`, values)
                .then(() => {
                    toast.success("Course Content Added Successfully");
                    resetForm({values: ''});
                })
                .catch(({error}) => {
                    console.log(error)
                });
        },
    });

    const [courseContentCategories, setCourseContentCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [courseContents, setCourseContents] = useState([]);

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

    const getCourseContents = async () => {
        try {
            const {data:data} = await http.get(`/course-content`)
            setCourseContents(data.data);
        } catch (error) {
            console.log(error)
        }
    }
    
    const editCourseContent = async () => {
      try {
          
      } catch (exception) {
          
      }
    }

    useEffect(() => {
        getCourseContentCategories();
        getCourses();
        getCourseContents();
    }, []);

  return (
      <>
          <div className="row mt-5">
              <ToastContainer/>
              <div className="col-lg-4">
                  <CourseContentForm courseContentForm={courseContentForm} courseContentCategories={courseContentCategories} courses={courses} />
              </div>
              <div className="col-lg-8">
                  <CourseContentList courseContents={courseContents} editCourseContent={editCourseContent} />
              </div>
          </div>
      </>
  );
}

export default CourseContent;