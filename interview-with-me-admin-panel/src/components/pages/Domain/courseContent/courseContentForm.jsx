import {useFormik} from "formik";
import * as Yup from "yup";
import http from "../../../../interceptors/http";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CourseContentForm = () => {
    const courseContentForm = useFormik({
        initialValues: {
            course_id: '',
            content_category_id: '',
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
            console.log(values,'values')
            http.post(`/course-content`, values)
                .then(() => {
                    toast.success("Course Content Added Successfully");
                    // console.log(CKEditor,'content')
                    // CKEditor.instances['content'].setData('');
                    resetForm({values: ''});
                })
                .catch(({error}) => {
                    console.log(error)
                });
        },
    });

    const [courseContentCategories, setCourseContentCategories] = useState([]);
    const [courses, setCourses] = useState([]);

    const getCourseContentCategories = async () => {
        try {
            const {data: data} = await http.get(`/fetch-course-content-category`)
            setCourseContentCategories(data);
        } catch (error) {
            console.log(error)
        }
    }

    const getCourses = async () => {
        try {
            const {data: data} = await http.get(`/fetch-courses`)
            setCourses(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCourseContentCategories();
        getCourses();
    }, []);


    return (
        <>
            <div className="row mt-5">
                <div className='col-lg-1'></div>
                <div className="col-lg-10">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Content Details</h4>
                        </div>
                        <div className="card-body">
                            <form className="row g-3 needs-validation" noValidate
                                  onSubmit={courseContentForm.handleSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="course_id" className="form-label">Course</label>
                                    <select
                                        className="form-control"
                                        id="course_id"
                                        name="course_id"
                                        onChange={courseContentForm.handleChange}
                                        onBlur={courseContentForm.handleBlur}
                                        value={courseContentForm.values.course_id}
                                    >
                                        <option value="">Select</option>
                                        {courses.map(({id, name}, index) => <option value={id}
                                                                                    key={index}>{name}</option>)}
                                    </select>
                                    <div className="text-danger">
                                        {
                                            courseContentForm.touched.course_id &&
                                            courseContentForm.errors.course_id &&
                                            (<div>{courseContentForm.errors.course_id}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="content_category_id" className="form-label">Course Category</label>
                                    <select
                                        className="form-control"
                                        id="content_category_id"
                                        name="content_category_id"
                                        onChange={courseContentForm.handleChange}
                                        onBlur={courseContentForm.handleBlur}
                                        value={courseContentForm.values.content_category_id}
                                    >
                                        <option value="">Select</option>
                                        {courseContentCategories.map(({id, contentCategoryTitle}, index) => <option
                                            value={id} key={index}>{contentCategoryTitle}</option>)}
                                    </select>
                                    <div className="text-danger">
                                        {
                                            courseContentForm.touched.content_category_id &&
                                            courseContentForm.errors.content_category_id &&
                                            (<div>{courseContentForm.errors.content_category_id}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="content_title" className="form-label">Title</label>
                                    <input type="text"
                                           className="form-control"
                                           id="content_title"
                                           name="content_title"
                                           onChange={courseContentForm.handleChange}
                                           onBlur={courseContentForm.handleBlur}
                                           value={courseContentForm.values.content_title}
                                    />
                                    <div className="text-danger">
                                        {
                                            courseContentForm.touched.content_title &&
                                            courseContentForm.errors.content_title &&
                                            (<div>{courseContentForm.errors.content_title}</div>)
                                        }
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="content" className="form-label">Content</label>
                                    <CKEditor
                                        className="form-control"
                                        editor={ ClassicEditor }
                                        name="content"
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            courseContentForm.setFieldValue('content',data)
                                        } }

                                    />
                                    {/*<textarea*/}
                                    {/*    className="form-control"*/}
                                    {/*    id="content"*/}
                                    {/*    name="content"*/}
                                    {/*    onChange={courseContentForm.handleChange}*/}
                                    {/*    onBlur={courseContentForm.handleBlur}*/}
                                    {/*    value={courseContentForm.values.content}*/}
                                    {/*/>*/}
                                    <div className="text-danger">
                                        {
                                            courseContentForm.touched.content &&
                                            courseContentForm.errors.content &&
                                            (<div>{courseContentForm.errors.content}</div>)
                                        }
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseContentForm;