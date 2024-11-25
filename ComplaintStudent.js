// ComplaintStudent.jsx
import React, { useState } from "react";
import { addComplaint } from "./api";

const ComplaintStudent = () => {
  const [username, setUsername] = useState("");
  const [prn, setPrn] = useState("");
  const [com, setCom] = useState("");

  const handleSubmit = async () => {
    if (!username || !prn || !com) {
      alert("Please fill all the fields");
      return;
    }
  
    try {
      const complaint = { username, prn, com };
      await addComplaint(complaint);
      alert("Complaint Added");
      setUsername("");
      setPrn("");
      setCom("");
    } catch (error) {
      console.error("Error adding complaint:", error);
    }
  };
  

  return (
    <div>
      <label>Enter Name</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <label>Enter PRN</label>
      <input
        type="text"
        value={prn}
        onChange={(e) => setPrn(e.target.value)}
      />
      <label>Enter Complaint</label>
      <input
        type="text"
        value={com}
        onChange={(e) => setCom(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ComplaintStudent;
