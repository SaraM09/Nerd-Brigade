// import React, { useState } from 'react';
// const TechnicianForm = () => {
//   // Form state
//   const [name, setName] = useState("")
//   const [contactInfo, setContactInfo] = useState("")
//   const [specializations, setSpecializations] = useState("")
//   const [bookings, setBookings] = useState([])
//   // Validation state
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [submissionError, setSubmissionError] = useState('');
  
//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length === 0) {
//       // Prepare the data to be sent to the backend
//       const technicianData = {
//         name,
//         contactInfo,
//         specializations
//       };
//       try {
//         setIsLoading(true);
//         const response = await fetch('http://localhost:1119/technicians', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(technicianData)
//         });
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to submit booking. Please check your input.');
//         }
//         const result = await response.json();
//         console.log('Booking submitted successfully:', result);
//         alert('Booking submitted successfully!');
//         resetForm();
//       } catch (error) {
//         console.error('Error submitting booking:', error);
//         setSubmissionError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };
//   // Reset form fields
//   const resetForm = () => {
//     setName("");
//     setContactInfo("");
//     setSpecializations("");
//     setSubmissionError("");
//     setErrors({});
//   };
//   // Validate form fields
//   const validateForm = () => {
//     const newErrors = {};
//     if (!name) newErrors.name = 'Name is required';
//     if (!contactInfo) newErrors.contactInfo = 'Contact info is required';
//     if (!specializations) newErrors.specializations = 'Specializations is required';
//     return newErrors;
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>
//         <div>
//           <label htmlFor="contactInfo">Contact Info:</label>
//           <input
//             type="text"
//             id="contactInfo"
//             value={contactInfo}
//             onChange={(e) => setContactInfo(e.target.value)}
//           />
//           {errors.contactInfo && <p className="error">{errors.contactInfo}</p>}     
//         </div>
//         <div>
//           <label htmlFor="specializations">Specializations:</label>
//           <input
//             type="text"
//             id="specializations"
//             value={specializations}
//             onChange={(e) => setSpecializations(e.target.value)}
//           />
//           {errors.specializations && <p className="error">{errors.specializations}</p>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default TechnicianForm;
// import React, { useState } from 'react';
// const TechnicianForm = () => {
//   // Form state
//   const [name, setName] = useState("")
//   const [contactInfo, setContactInfo] = useState("")
//   const [specializations, setSpecializations] = useState("")
//   const [bookings, setBookings] = useState([])
//   // Validation state
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [submissionError, setSubmissionError] = useState('');
  
//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length === 0) {
//       // Prepare the data to be sent to the backend
//       const technicianData = {
//         name,
//         contactInfo,
//         specializations
//       };
//       try {
//         setIsLoading(true);
//         const response = await fetch('http://localhost:1119/technicians', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(technicianData)
//         });
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to submit booking. Please check your input.');
//         }
//         const result = await response.json();
//         console.log('Booking submitted successfully:', result);
//         alert('Booking submitted successfully!');
//         resetForm();
//       } catch (error) {
//         console.error('Error submitting booking:', error);
//         setSubmissionError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };
//   // Reset form fields
//   const resetForm = () => {
//     setName("");
//     setContactInfo("");
//     setSpecializations("");
//     setSubmissionError("");
//     setErrors({});
//   };
//   // Validate form fields
//   const validateForm = () => {
//     const newErrors = {};
//     if (!name) newErrors.name = 'Name is required';
//     if (!contactInfo) newErrors.contactInfo = 'Contact info is required';
//     if (!specializations) newErrors.specializations = 'Specializations is required';
//     return newErrors;
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="container mt-4">
//   <div className="mb-3">
//     <label htmlFor="serviceType" className="form-label">Service Type:</label>
//     <select id="serviceType" value={serviceType} onChange={e => setServiceType(e.target.value)} className="form-select">
//       <option value="">Select a Service</option>
//       <option value="repair">Repair</option>
//       <option value="maintenance">Maintenance</option>
//       <option value="installation">Installation</option>
//     </select>
//     {errors.serviceType && <p className="text-danger">{errors.serviceType}</p>}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="issueDescription" className="form-label">Issue Description:</label>
//     <textarea
//       id="issueDescription"
//       value={issueDescription}
//       onChange={e => setIssueDescription(e.target.value)}
//       className="form-control"
//     />
//     {errors.issueDescription && <p className="text-danger">{errors.issueDescription}</p>}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="scheduledDate" className="form-label">Scheduled Date:</label>
//     <input
//       type="date"
//       id="scheduledDate"
//       value={scheduledDate}
//       onChange={e => setScheduledDate(e.target.value)}
//       className="form-control"
//     />
//     {errors.scheduledDate && <p className="text-danger">{errors.scheduledDate}</p>}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="technician" className="form-label">Technician (optional):</label>
//     <select id="technician" value={technician} onChange={e => setTechnician(e.target.value)} className="form-select">
//       <option value="">No preference</option>
//       <option value="tech1">Technician 1</option>
//       <option value="tech2">Technician 2</option>
//     </select>
//   </div>
//   {submissionError && <p className="text-danger">{submissionError}</p>}
//   <button type="submit" disabled={isLoading} className="btn btn-primary">
//     {isLoading ? 'Submitting...' : 'Submit'}
//   </button>
// </form>
      
//     </div>
//   );
// };

// export default TechnicianForm;
import React, { useState } from 'react';
const TechnicianForm = () => {
  // Form state
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [specializations, setSpecializations] = useState("");
  // Validation state
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:1119/technicians', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, contactInfo, specializations })
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to submit technician details.');
        }
        const result = await response.json();
        alert('Technician details submitted successfully!');
        resetForm();
      } catch (error) {
        console.error('Error submitting technician details:', error);
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
    if (!specializations) newErrors.specializations = 'Specializations are required';
    return newErrors;
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="contactInfo" className="form-label">Contact Info:</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={e => setContactInfo(e.target.value)}
            className="form-control"
          />
          {errors.contactInfo && <p className="text-danger">{errors.contactInfo}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="specializations" className="form-label">Specializations:</label>
          <input
            type="text"
            id="specializations"
            value={specializations}
            onChange={e => setSpecializations(e.target.value)}
            className="form-control"
          />
          {errors.specializations && <p className="text-danger">{errors.specializations}</p>}
        </div>
        {submissionError && <p className="text-danger">{submissionError}</p>}
        <button type="submit" disabled={isLoading} className="btn btn-primary">
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
export default TechnicianForm;















