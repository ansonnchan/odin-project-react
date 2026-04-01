import { useState } from 'react';

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="general-info-section">
      <h2>General Information</h2>
      
      {isEditing ? (
        <form className="form-group">
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={generalInfo.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={generalInfo.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <button 
            type="button" 
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="display-group">
          <div className="display-field">
            <strong>Full Name:</strong>
            <p>{generalInfo.fullName}</p>
          </div>

          <div className="display-field">
            <strong>Email:</strong>
            <p>{generalInfo.email}</p>
          </div>

          <div className="display-field">
            <strong>Phone Number:</strong>
            <p>{generalInfo.phoneNumber}</p>
          </div>

          <button 
            className="edit-btn"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
