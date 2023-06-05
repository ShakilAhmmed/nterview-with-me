const CourseQuestionForm = (props) => {
    const {courseQuestionForm,courseContentCategories,courses} = props;

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Course Content Form</h4>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" noValidate onSubmit={courseQuestionForm.handleSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="course_id" className="form-label">Course</label>
                            <select
                                className="form-control"
                                id="course_id"
                                name="course_id"
                                onChange={courseQuestionForm.handleChange}
                                onBlur={courseQuestionForm.handleBlur}
                                value={courseQuestionForm.values.course_id}
                            >
                                <option value="">Select</option>
                                {courses.map(({ id, name }, index) => <option value={id} key={index}>{name}</option>)}
                            </select>
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.course_id &&
                                    courseQuestionForm.errors.course_id &&
                                    (<div>{courseQuestionForm.errors.course_id}</div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="content_category_id" className="form-label">Course Category</label>
                            <select
                                className="form-control"
                                id="content_category_id"
                                name="content_category_id"
                                onChange={courseQuestionForm.handleChange}
                                onBlur={courseQuestionForm.handleBlur}
                                value={courseQuestionForm.values.content_category_id}
                            >
                                <option value="">Select</option>
                                {courseContentCategories.map(({ id, contentCategoryTitle }, index) => <option value={id} key={index}>{contentCategoryTitle}</option>)}
                            </select>
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.content_category_id &&
                                    courseQuestionForm.errors.content_category_id &&
                                    (<div>{courseQuestionForm.errors.content_category_id}</div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="question" className="form-label">Question</label>
                            <textarea
                                   className="form-control"
                                   id="question"
                                   name="question"
                                   onChange={courseQuestionForm.handleChange}
                                   onBlur={courseQuestionForm.handleBlur}
                                   value={courseQuestionForm.values.question}
                            />
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.question &&
                                    courseQuestionForm.errors.question &&
                                    (<div>{courseQuestionForm.errors.question}</div>)
                                }
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="content" className="form-label">Choice One</label>
                            <input type="text"
                                className="form-control"
                                id="choice_one"
                                name="choice_one"
                                onChange={courseQuestionForm.handleChange}
                                onBlur={courseQuestionForm.handleBlur}
                                value={courseQuestionForm.values.choice_one}
                            />
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.choice_one &&
                                    courseQuestionForm.errors.choice_one &&
                                    (<div>{courseQuestionForm.errors.choice_one}</div>)
                                }
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="choice_two" className="form-label">Choice Two</label>
                            <input type="text"
                                   className="form-control"
                                   id="choice_two"
                                   name="choice_two"
                                   onChange={courseQuestionForm.handleChange}
                                   onBlur={courseQuestionForm.handleBlur}
                                   value={courseQuestionForm.values.choice_two}
                            />
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.choice_two &&
                                    courseQuestionForm.errors.choice_two &&
                                    (<div>{courseQuestionForm.errors.choice_two}</div>)
                                }
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="choice_three" className="form-label">Choice Three</label>
                            <input type="text"
                                   className="form-control"
                                   id="choice_three"
                                   name="choice_three"
                                   onChange={courseQuestionForm.handleChange}
                                   onBlur={courseQuestionForm.handleBlur}
                                   value={courseQuestionForm.values.choice_three}
                            />
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.choice_three &&
                                    courseQuestionForm.errors.choice_three &&
                                    (<div>{courseQuestionForm.errors.choice_three}</div>)
                                }
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="choice_four" className="form-label">Choice Four</label>
                            <input type="text"
                                   className="form-control"
                                   id="choice_four"
                                   name="choice_four"
                                   onChange={courseQuestionForm.handleChange}
                                   onBlur={courseQuestionForm.handleBlur}
                                   value={courseQuestionForm.values.choice_four}
                            />
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.choice_four &&
                                    courseQuestionForm.errors.choice_four &&
                                    (<div>{courseQuestionForm.errors.choice_four}</div>)
                                }
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="correct_choice" className="form-label">Correct Choice</label>
                            <input type="text"
                                   className="form-control"
                                   id="correct_choice"
                                   name="correct_choice"
                                   onChange={courseQuestionForm.handleChange}
                                   onBlur={courseQuestionForm.handleBlur}
                                   value={courseQuestionForm.values.correct_choice}
                            />
                            <div className="text-danger">
                                {
                                    courseQuestionForm.touched.correct_choice &&
                                    courseQuestionForm.errors.correct_choice &&
                                    (<div>{courseQuestionForm.errors.correct_choice}</div>)
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

export default CourseQuestionForm;