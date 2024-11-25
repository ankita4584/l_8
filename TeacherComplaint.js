// TeacherComplaint.jsx
import React, { useState } from "react";
import { getData } from "./api";

const TeacherComplaint = () => {
  const [complaints, setComplaints] = useState([]);

  const handleView = async () => {
    try {
      const data = await getData(); // Fetch complaints from API
      setComplaints(data.data); // Update state with fetched complaints
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  return (
    <div>
      <h2>Student Complaints</h2>
      <button onClick={handleView}>View Complaints</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>PRN</th>
            <th>Complaint</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={index}>
              <td>{complaint.name}</td>
              <td>{complaint.prn}</td>
              <td>{complaint.complaint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherComplaint;
