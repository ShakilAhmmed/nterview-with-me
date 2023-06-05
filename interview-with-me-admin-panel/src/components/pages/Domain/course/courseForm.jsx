const courseForm = (props) => {
    console.log({props})
    const {courseForm,courseCategories} = props;

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Course Form</h4>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" noValidate onSubmit={courseForm.handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="course_category_id" className="form-label">Course Category</label>
                            <select
                                className="form-control"
                                id="course_category_id"
                                name="course_category_id"
                                onChange={courseForm.handleChange}
                                onBlur={courseForm.handleBlur}
                                value={courseForm.values.course_category_id}
                            >
                                <option value="">Select</option>
                                {courseCategories.map(({ id, name }, index) => <option value={id} key={index}>{name}</option>)}
                            </select>
                            <div className="text-danger">
                                {
                                    courseForm.touched.course_category_id &&
                                    courseForm.errors.course_category_id &&
                                    (<div>{courseForm.errors.course_category_id}</div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   onChange={courseForm.handleChange}
                                   onBlur={courseForm.handleBlur}
                                   value={courseForm.values.name}
                            />
                            <div className="text-danger">
                                {
                                    courseForm.touched.name &&
                                    courseForm.errors.name &&
                                    (<div>{courseForm.errors.name}</div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select
                                className="form-control"
                                id="status"
                                name="status"
                                onChange={courseForm.handleChange}
                                onBlur={courseForm.handleBlur}
                                value={courseForm.values.status}
                            >
                                <option value="">Select</option>
                                <option value={1}>Active</option>
                                <option value={0}>In Active</option>
                            </select>
                            <div className="text-danger">
                                {
                                    courseForm.touched.status &&
                                    courseForm.errors.status &&
                                    (<div>{courseForm.errors.status}</div>)
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

export default courseForm;