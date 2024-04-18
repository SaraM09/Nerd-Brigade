import React, { useState } from 'react';
const BookingsForm = ({ userId }) => {
  // Form state
  const [serviceType, setServiceType] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [technician, setTechnician] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  // Validation state
  const [errors, setErrors] = useState({});
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Prepare the data to be sent to the backend
      const bookingData = {
        userId, // Including userId in the booking data
        technicianId: technician || null, // Convert empty string to null if no technician is chosen
        serviceType,
        issueDescription,
        scheduledDate
      };
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:1119/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
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
    setServiceType('');
    setIssueDescription('');
    setScheduledDate('');
    setTechnician('');
    setSubmissionError('');
    setErrors({});
  };
  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!serviceType) newErrors.serviceType = 'Service type is required';
    if (!issueDescription || issueDescription.length < 10) {
      newErrors.issueDescription = 'Description must be at least 10 characters';
    }
    if (!scheduledDate) newErrors.scheduledDate = 'Scheduled date is required';
    if (scheduledDate && new Date(scheduledDate) < new Date()) {
      newErrors.scheduledDate = 'Scheduled date cannot be in the past.';
    }
    return newErrors;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="serviceType">Service Type:</label>
        <select id="serviceType" value={serviceType} onChange={e => setServiceType(e.target.value)}>
          <option value="">Select a Service</option>
          <option value="repair">Repair</option>
          <option value="maintenance">Maintenance</option>
          <option value="installation">Installation</option>
        </select>
        {errors.serviceType && <p className="error">{errors.serviceType}</p>}
      </div>
      <div>
        <label htmlFor="issueDescription">Issue Description:</label>
        <textarea
          id="issueDescription"
          value={issueDescription}
          onChange={e => setIssueDescription(e.target.value)}
        />
        {errors.issueDescription && <p className="error">{errors.issueDescription}</p>}
      </div>
      <div>
        <label htmlFor="scheduledDate">Scheduled Date:</label>
        <input
          type="date"
          id="scheduledDate"
          value={scheduledDate}
          onChange={e => setScheduledDate(e.target.value)}
        />
        {errors.scheduledDate && <p className="error">{errors.scheduledDate}</p>}
      </div>
      <div>
        <label htmlFor="technician">Technician (optional):</label>
        <select id="technician" value={technician} onChange={e => setTechnician(e.target.value)}>
          <option value="">No preference</option>
          <option value="tech1">Technician 1</option>
          <option value="tech2">Technician 2</option>
        </select>
      </div>
      {submissionError && <p className="error">{submissionError}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default BookingsForm;









