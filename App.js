import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ComplaintStudent from './ComplaintStudent';
import TeacherComplaint from './TeacherComplaint';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Complaint Management System</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student" element={<ComplaintStudent />} />
          <Route path="/teacher" element={<TeacherComplaint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
