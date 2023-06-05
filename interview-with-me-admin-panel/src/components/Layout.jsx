import LeftBarTab from "./layouts/LeftBarTab";
import TopBar from "./layouts/TopBar";
import RightBar from "./layouts/RightBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import PrivateComponent from "./PrivateComponent";
import CourseCategory from "./pages/Domain/courseCategory/courseCategory"
import Course from "./pages/Domain/course/course";
import CourseContentCategory from "./pages/Domain/courseContentCategory/courseContentCategory";
import CourseContent from "./pages/Domain/courseContent/courseContent";
import CourseQuestion from "./pages/Domain/courseQuestion/courseQuestion";
import Quiz from "./pages/Domain/Quiz/quiz";
import QuizQuestion from "./pages/Domain/quizQuestion/quizQuestion";

const Layout = () => {
    return (
        <>
            <div>
                <LeftBarTab/>
                <TopBar/>
                <div className="page-wrapper">
                    <div className="page-content-tab">
                        <div className="container-fluid">
                            <Routes>
                                <Route path="/home" element={
                                    <PrivateComponent>
                                        <Home/>
                                    </PrivateComponent>
                                }/>
                                <Route path="/course-categories" element={<CourseCategory />} />
                                <Route path="/courses" element={<Course />} />
                                <Route path="/course-content-categories" element={<CourseContentCategory />} />
                                <Route path="/course-content" element={<CourseContent />} />
                                <Route path="/course-question" element={<CourseQuestion />} />
                                <Route path="/quizs" element={<Quiz />} />
                                <Route path="/quiz-questions" element={<QuizQuestion />} />
                            </Routes>
                        </div>
                        <RightBar/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;