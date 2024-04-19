import React, { useState } from 'react';
const TechnicianForm = () => {
  // Form state
  const [name, setName] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  const [specializations, setSpecializations] = useState("")
  const [bookings, setBookings] = useState([])
  // Validation state
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Prepare the data to be sent to the backend
      const technicianData = {
        name,
        contactInfo,
        specializations
      };
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:1119/technicians', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(technicianData)
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to submit booking. Please check your input.');
        }
        const result = await response.json();
        console.log('Booking submitted successfully:', result);
        alert('Booking submitted successfully!');
        resetForm();
      } catch (error) {
        console.error('Error submitting booking:', error);
        setSubmissionError(error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };
  // Reset form fields
  const resetForm = () => {
    setName("");
    setContactInfo("");
    setSpecializations("");
    setSubmissionError("");
    setErrors({});
  };
  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!contactInfo) newErrors.contactInfo = 'Contact info is required';
    if (!specializations) newErrors.specializations = 'Specializations is required';
    return newErrors;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contactInfo">Contact Info:</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
          />
          {errors.contactInfo && <p className="error">{errors.contactInfo}</p>}     
        </div>
        <div>
          <label htmlFor="specializations">Specializations:</label>
          <input
            type="text"
            id="specializations"
            value={specializations}
            onChange={(e) => setSpecializations(e.target.value)}
          />
          {errors.specializations && <p className="error">{errors.specializations}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TechnicianForm;