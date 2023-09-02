import {Link} from "react-router-dom";

const Main = () => {
    return (
        <>
            <div style={{marginLeft: '22px', marginTop: '75px'}}>
                <div className="main-icon-menu-pane tab-pane">
                    <div className="title-box">
                        <h6 className="menu-title">Dashboard</h6>
                    </div>
                    <ul className="nav flex-column">

                        <li className="nav-item">
                            <Link className="nav-link" to="/course-categories">Course Categories</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/course-content-categories">Course Chapters</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/course-content">Chapter Content </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/course-question">Course Questions</Link>
                        </li>

                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to="/">Coding Challenge Question</Link>*/}
                        {/*</li>*/}

                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to="/">Subscribed Course</Link>*/}
                        {/*</li>*/}

                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to="/">Course Progress</Link>*/}
                        {/*</li>*/}

                        <li className="nav-item">
                            <Link className="nav-link" to="/quizs">Quiz</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/quiz-questions">Quiz Questions</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Quiz Participators</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Participator Progress</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;