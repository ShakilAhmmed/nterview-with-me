const CourseList = (props) => {
    const {courses,editCourse} = props;

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Course List</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mb-0 table-centered">
                            <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Course Category</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th className="text-end">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {courses && courses.map((course,index) =>{
                                return (<tr key={index}>
                                        <td>{ index + 1 }</td>
                                        <td>{ course.courseCategory.name }</td>
                                        <td>{ course.name }</td>
                                        <td>{ course.status === 1 ? 'Active' : 'In Active' } </td>
                                        <td className="text-end">
                                            <button onClick={() => editCourse(course.id)} className="btn btn-de-dashed-info">
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

export default CourseList;