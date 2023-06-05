const CourseQuestionList = (props) => {
    const {courseQuestions,editCourseQuestion} = props
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Course Question List</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mb-0 table-centered">
                            <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Course</th>
                                <th>Course Content Category</th>
                                <th>Question</th>
                                <th className="text-end">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {courseQuestions && courseQuestions.map((course,index) =>{
                                return (<tr key={index}>
                                        <td>{ index + 1 }</td>
                                        <td>{ course.course.name }</td>
                                        <td>{ course.contentCategory.contentCategoryTitle }</td>
                                        <td>{ course.question } </td>
                                        <td className="text-end">
                                            <button onClick={() => editCourseQuestion(course.id)} className="btn btn-de-dashed-info">
                                                <i className="fa fa-edit"></i>
                                            </button>

                                            <button className="btn btn-de-dashed-danger">
                                                <i className="fa fa-times"></i>
                                            </button>

                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );

}

export default CourseQuestionList;