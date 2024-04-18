import React, { useState } from 'react';
const BookingForm = ({ userId }) => { // Assuming userId is passed as a prop
  // Form state
  const [serviceType, setServiceType] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [technician, setTechnician] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status or a status selector can be added
  const [costEstimate, setCostEstimate] = useState(''); // Optional cost estimate
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
      const bookingData = {
        userId,
        technicianId: technician || null,
        serviceType,
        issueDescription,
        status,
        scheduledDate,
        costEstimate: costEstimate || null,
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
        // Clear form after successful submission or navigate to a success page or display a success message
        console.log('Booking submitted successfully:', await response.json());
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
  const resetForm = () => {
    setServiceType('');
    setIssueDescription('');
    setScheduledDate('');
    setTechnician('');
    setStatus('Pending');
    setCostEstimate('');
    setSubmissionError('');
  };
  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};
    if (!serviceType) newErrors.serviceType = 'Service type is required';
    if (!issueDescription || issueDescription.length < 10) {
      newErrors.issueDescription = 'Description must be at least 10 characters';
    }
    if (!scheduledDate) newErrors.scheduledDate = 'Scheduled date is required';
    if (!status) newErrors.status = 'Status is required';
    return newErrors;
  };
  // Form components
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="serviceType">Service Type:</label>
      <select id="serviceType" value={serviceType} onChange={e => setServiceType(e.target.value)}>
        <option value="">Select a Service</option>
        <option value="repair">Repair</option>
        <option value="maintenance">Maintenance</option>
        <option value="installation">Installation</option>
      </select>
      {errors.serviceType && <p>{errors.serviceType}</p>}
      <label htmlFor="issueDescription">Issue Description:</label>
      <textarea id="issueDescription" value={issueDescription} onChange={e => setIssueDescription(e.target.value)} />
      {errors.issueDescription && <p>{errors.issueDescription}</p>}
      <label htmlFor="scheduledDate">Scheduled Date:</label>
      <input type="date" id="scheduledDate" value={scheduledDate} onChange={e => setScheduledDate(e.target.value)} />
      {errors.scheduledDate && <p>{errors.scheduledDate}</p>}
      <label htmlFor="technician">Technician (optional):</label>
      <select id="technician" value={technician} onChange={e => setTechnician(e.target.value)}>
        <option value="">No preference</option>
        <option value="tech1">Technician 1</option>
        <option value="tech2">Technician 2</option>
      </select>
      {submissionError && <p className="error">{submissionError}</p>}
      <button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit Booking'}</button>
    </form>
  );
};
export default BookingForm;






















