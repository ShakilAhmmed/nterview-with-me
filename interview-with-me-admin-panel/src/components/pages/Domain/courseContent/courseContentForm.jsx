const CourseContentForm = (props) => {
    const {courseContentForm,courseContentCategories,courses} = props;

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Course Content Form</h4>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" noValidate onSubmit={courseContentForm.handleSubmit}>
                        <div className="col-md-6">
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
                                {courses.map(({ id, name }, index) => <option value={id} key={index}>{name}</option>)}
                            </select>
                            <div className="text-danger">
                                {
                                    courseContentForm.touched.course_id &&
                                    courseContentForm.errors.course_id &&
                                    (<div>{courseContentForm.errors.course_id}</div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
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
                                {courseContentCategories.map(({ id, contentCategoryTitle }, index) => <option value={id} key={index}>{contentCategoryTitle}</option>)}
                            </select>
                            <div className="text-danger">
                                {
                                    courseContentForm.touched.content_category_id &&
                                    courseContentForm.errors.content_category_id &&
                                    (<div>{courseContentForm.errors.content_category_id}</div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
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

                        <div className="col-md-6">
                            <label htmlFor="content" className="form-label">Content</label>
                            <textarea
                                   className="form-control"
                                   id="content"
                                   name="content"
                                   onChange={courseContentForm.handleChange}
                                   onBlur={courseContentForm.handleBlur}
                                   value={courseContentForm.values.content}
                            />
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
        </>
    );
}

export default CourseContentForm;