// import logo from './logo.svg';
// import './App.css';
import Home from "./Pages/Home";
import {  Routes, Route } from 'react-router-dom'
import About from "./Pages/About";
import Course from "./Pages/Course";
import CourseDetails from "./Component/Course/CourseDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ContentReading from "./Component/Course/ContentReading";
import Quiz from "./Pages/Quiz";
import QuizQuestion from "./Component/quiz/QuizQuestion";


function App() {
  return (
    <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/course" element={<Course />}/>
          <Route path="/course-details/:id" element={<CourseDetails />}/>
          <Route path="/course-content-reading/:courseId/:id" element={<ContentReading />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/quiz-question/:quiz_id' element={<QuizQuestion />} />
        </Routes>
    </div>
  );
}

export default App;
