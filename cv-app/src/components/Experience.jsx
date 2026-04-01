import { useState } from 'react';

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [experienceList, setExperienceList] = useState([]);
  const [currentExperience, setCurrentExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (currentExperience.companyName || currentExperience.positionTitle) {
      setExperienceList(prev => [...prev, currentExperience]);
      setCurrentExperience({
        companyName: '',
        positionTitle: '',
        mainResponsibilities: '',
        dateFrom: '',
        dateUntil: ''
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
    setExperienceList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="experience-section">
      <h2>Practical Experience</h2>
      
      {isEditing ? (
        <div className="form-container">
          <form className="form-group">
            <div className="form-field">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={currentExperience.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="positionTitle">Position Title</label>
              <input
                type="text"
                id="positionTitle"
                name="positionTitle"
                value={currentExperience.positionTitle}
                onChange={handleChange}
                placeholder="Enter position title (e.g., Senior Developer)"
              />
            </div>

            <div className="form-field">
              <label htmlFor="mainResponsibilities">Main Responsibilities</label>
              <textarea
                id="mainResponsibilities"
                name="mainResponsibilities"
                value={currentExperience.mainResponsibilities}
                onChange={handleChange}
                placeholder="Describe your main responsibilities"
                rows="4"
              />
            </div>

            <div className="form-field">
              <label htmlFor="dateFrom">Date From</label>
              <input
                type="text"
                id="dateFrom"
                name="dateFrom"
                value={currentExperience.dateFrom}
                onChange={handleChange}
                placeholder="e.g., January 2020"
              />
            </div>

            <div className="form-field">
              <label htmlFor="dateUntil">Date Until</label>
              <input
                type="text"
                id="dateUntil"
                name="dateUntil"
                value={currentExperience.dateUntil}
                onChange={handleChange}
                placeholder="e.g., December 2023"
              />
            </div>

            <div className="button-group">
              <button 
                type="button" 
                className="add-more-btn"
                onClick={handleAddMore}
              >
                Add Experience
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

          {experienceList.length > 0 && (
            <div className="experience-list">
              <h3>Added Experiences:</h3>
              {experienceList.map((experience, index) => (
                <div key={index} className="experience-item">
                  <p><strong>Company:</strong> {experience.companyName}</p>
                  <p><strong>Position:</strong> {experience.positionTitle}</p>
                  <p><strong>Responsibilities:</strong> {experience.mainResponsibilities}</p>
                  <p><strong>Date:</strong> {experience.dateFrom} - {experience.dateUntil}</p>
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
          {experienceList.length > 0 ? (
            <div className="experience-display">
              {experienceList.map((experience, index) => (
                <div key={index} className="experience-item-display">
                  <h3>{experience.positionTitle}</h3>
                  <p><strong>Company:</strong> {experience.companyName}</p>
                  <p><strong>Duration:</strong> {experience.dateFrom} - {experience.dateUntil}</p>
                  <p><strong>Responsibilities:</strong></p>
                  <p className="responsibilities">{experience.mainResponsibilities}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No work experience added yet.</p>
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

export default Experience;
