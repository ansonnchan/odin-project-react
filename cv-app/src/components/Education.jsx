import { useState } from 'react';

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [educationList, setEducationList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (currentEducation.schoolName || currentEducation.titleOfStudy || currentEducation.dateOfStudy) {
      setEducationList(prev => [...prev, currentEducation]);
      setCurrentEducation({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
      });
    }
  };

  const handleAddMore = () => {
    handleSubmit();
  };

  const handleFinish = () => {
    handleSubmit();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleRemove = (index) => {
    setEducationList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="education-section">
      <h2>Educational Experience</h2>
      
      {isEditing ? (
        <div className="form-container">
          <form className="form-group">
            <div className="form-field">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={currentEducation.schoolName}
                onChange={handleChange}
                placeholder="Enter school name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="titleOfStudy">Title of Study</label>
              <input
                type="text"
                id="titleOfStudy"
                name="titleOfStudy"
                value={currentEducation.titleOfStudy}
                onChange={handleChange}
                placeholder="Enter title of study (e.g., Bachelor of Science)"
              />
            </div>

            <div className="form-field">
              <label htmlFor="dateOfStudy">Date of Study</label>
              <input
                type="text"
                id="dateOfStudy"
                name="dateOfStudy"
                value={currentEducation.dateOfStudy}
                onChange={handleChange}
                placeholder="e.g., 2020 - 2024"
              />
            </div>

            <div className="button-group">
              <button 
                type="button" 
                className="add-more-btn"
                onClick={handleAddMore}
              >
                Add Education
              </button>
              <button 
                type="button" 
                className="submit-btn"
                onClick={handleFinish}
              >
                Done
              </button>
            </div>
          </form>

          {educationList.length > 0 && (
            <div className="education-list">
              <h3>Added Education:</h3>
              {educationList.map((education, index) => (
                <div key={index} className="education-item">
                  <p><strong>School:</strong> {education.schoolName}</p>
                  <p><strong>Study:</strong> {education.titleOfStudy}</p>
                  <p><strong>Date:</strong> {education.dateOfStudy}</p>
                  <button 
                    type="button"
                    className="remove-btn"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="display-container">
          {educationList.length > 0 ? (
            <div className="education-display">
              {educationList.map((education, index) => (
                <div key={index} className="education-item-display">
                  <h3>{education.schoolName}</h3>
                  <p><strong>Degree/Title:</strong> {education.titleOfStudy}</p>
                  <p><strong>Duration:</strong> {education.dateOfStudy}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No educational experience added yet.</p>
          )}
          
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

export default Education;
