import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../../../interceptors/http";
import CourseCategoryList from "./courseCategoryList";
import CourseCategoryForm from "./courseCategoryForm";

const CourseCategory = () => {

    const courseCategoryForm = useFormik({

        initialValues : {
            name : '',
            status : ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name Is Required'),
            status: Yup.string().required('Status Is Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values,'values')
            values['status'] = values['status'] === "1";
            http.post(`/course-categories`, values)
                .then(() => {
                    toast.success("Course Category Added Successfully");
                    resetForm({values: ''});
                    return getCourseCategories();
                })
                .catch(({error}) => {

                });
        },
    });

    const [courseCategories, setCourseCategories] = useState([]);

    const getCourseCategories = async () => {
        try {
            const {data:data} = await http.get(`/course-categories`)
            setCourseCategories(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const editCategory = async (id) => {
        try {
            const {data:data} = await http.get(`/course-categories/${id}`)
            this.courseCategoryForm.name = data.data.name;
            this.courseCategoryForm.status = data.data.status;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCourseCategories();
    }, []);

    return (
        <>
            <div className="row mt-5">
                <ToastContainer/>
                <div className="col-lg-4">
                <CourseCategoryForm courseCategoryForm={courseCategoryForm} />
                </div>
                <div className="col-lg-8">
                    <CourseCategoryList courseCategories={courseCategories} editCategory={editCategory} />
                </div>
            </div>
        </>
    );
}

export default CourseCategory;