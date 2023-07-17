const CourseContentCategoryList = (props) => {
    const {courseContentCategories,editCourseContent} = props;

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Course Contents</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mb-0 table-centered">
                            <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Course</th>
                                <th>Title</th>
                                <th className="text-end">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {courseContentCategories && courseContentCategories.map((category,index) =>{
                                return (<tr key={index}>
                                        <td>{ index + 1 }</td>
                                        <td>{ category.course.name }</td>
                                        <td>{ category.contentCategoryTitle }</td>
                                        <td className="text-end">
                                            <button onClick={() => editCourseContent(category.id)} className="btn btn-de-dashed-info">
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

export default CourseContentCategoryList;