const CourseContentList = (props) => {
    const {courseContents,editCourseContent} = props;

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Course Content List</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mb-0 table-centered">
                            <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Course</th>
                                <th>Course Content Category</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th className="text-end">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {courseContents && courseContents.map((course,index) =>{
                                return (<tr key={index}>
                                        <td>{ index + 1 }</td>
                                        <td>{ course.course.name }</td>
                                        <td>{ course.contentCategory.contentCategoryTitle }</td>
                                        <td>{ course.contentTitle } </td>
                                        <td>{ course.content } </td>
                                        <td className="text-end">
                                            <button onClick={() => editCourseContent(course.id)} className="btn btn-de-dashed-info">
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

export default CourseContentList;