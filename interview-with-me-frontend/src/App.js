// import logo from './logo.svg';
// import './App.css';
import Home from "./Pages/Home";
import {  Routes, Route } from 'react-router-dom'
import About from "./Pages/About";
import Course from "./Pages/Course";
import CourseDetails from "./Component/Course/CourseDetails";


function App() {
  return (
    <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/course" element={<Course />}/>
          <Route path="/course-details" element={<CourseDetails />}/>
        </Routes>
    </div>
  );
}

export default App;
