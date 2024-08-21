import React, { useState } from 'react';
import './EnrollmentForm.css'; // Import the CSS file

const EnrollmentForm = () => {
  // Define state for all fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    age: '',
    gender: '',
    phone: '',
    address: '',
    course: '',
    term: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    comments: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Clear the form fields
    setFormData({
      fullName: '',
      email: '',
      dob: '',
      age: '',
      gender: '',
      phone: '',
      address: '',
      course: '',
      term: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      comments: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email Address:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Course of Interest:</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} required />
      </div>
      <div>
        <label>Preferred Enrollment Term:</label>
        <input type="text" name="term" value={formData.term} onChange={handleChange} required />
      </div>
      <div>
        <label>Emergency Contact Name:</label>
        <input type="text" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} required />
      </div>
      <div>
        <label>Emergency Contact Phone Number:</label>
        <input type="text" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} required />
      </div>
      <div>
        <label>Additional Comments:</label>
        <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnrollmentForm;
