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
                            <Link className="nav-link" to="/course-categories">Course Category</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Course</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/course-content-categories">Course Content Category</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/course-content">Course Content</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/course-question">Course Question</Link>
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
                            <Link className="nav-link" to="/quiz-questions">Quiz Question</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Quiz Participator</Link>
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