import React, { useState } from 'react';
const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) {
      formErrors.username = 'Username is required.';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid.';
    }
    if (formData.phone && !/^\+?([0-9]{1,3})[ ]?([0-9]{10})$/.test(formData.phone)) {
      formErrors.phone = 'Phone number is invalid.';
    }
    return formErrors;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:1119/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
          throw new Error('Failed to create user. Please try again.');
        }
        alert('User created successfully!');
        setFormData({
          username: '',
          email: '',
          phone: '',
          address: ''
        });
      } catch (error) {
        setErrors({ submit: error.message });
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone (optional):</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="address">Address (optional):</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      {errors.submit && <p className="error">{errors.submit}</p>}
      <button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
    </form>
  );
};
export default UserForm;




