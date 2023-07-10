// import logo from './logo.svg';
// import './App.css';
import Home from "./Pages/Home";
import {  Routes, Route } from 'react-router-dom'
import About from "./Pages/About";
import Course from "./Pages/Course";
import CourseDetails from "./Component/Course/CourseDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


function App() {
  return (
    <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/course" element={<Course />}/>
          <Route path="/course-details/:id" element={<CourseDetails />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
