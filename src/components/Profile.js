import React, { useState } from 'react';
import { useUser } from './UserContext';
import "./Profile.css"
import { useNavigate } from 'react-router-dom';

var a=0;

const Profile = () => {

  const navigate = useNavigate();

  const handleInternship = () => {
    navigate('/internship');
  };

  const { user, updateUser } = useUser();
  const [totalScore, setTotalScore] = useState(user.coins || 0); 
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [resume, setResume] = useState('');
  const [eduType, setEduType] = useState('');
  const [schoolCollege, setSchoolCollege] = useState('');
  const [startDateEdu, setStartDateEdu] = useState('');
  const [endDateEdu, setEndDateEdu] = useState('');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [expType, setExpType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [role, setRole] = useState('');
  const [startDateExp, setStartDateExp] = useState('');
  const [endDateExp, setEndDateExp] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  
  const [nameSaved, setNameSaved] = useState(false);
  const [mobileSaved, setMobileSaved] = useState(false);
  const [profilePicSaved, setProfilePicSaved] = useState(false);
  const [linkedinSaved, setLinkedinSaved] = useState(false);
  const [githubSaved, setGithubSaved] = useState(false);
  const [resumeSaved, setResumeSaved] = useState(false);
  const [eduTypeSaved, setEduTypeSaved] = useState(false);
  const [schoolCollegeSaved, setSchoolCollegeSaved] = useState(false);
  const [startDateEduSaved, setStartDateEduSaved] = useState(false);
  const [endDateEduSaved, setEndDateEduSaved] = useState(false);
  const [projectNameSaved, setProjectNameSaved] = useState(false);
  const [descriptionSaved, setDescriptionSaved] = useState(false);
  const [projectTypeSaved, setProjectTypeSaved] = useState(false);
  const [projectLinkSaved, setProjectLinkSaved] = useState(false);
  const [expTypeSaved, setExpTypeSaved] = useState(false);
  const [companyNameSaved, setCompanyNameSaved] = useState(false);
  const [companyWebsiteSaved, setCompanyWebsiteSaved] = useState(false);
  const [roleSaved, setRoleSaved] = useState(false);
  const [startDateExpSaved, setStartDateExpSaved] = useState(false);
  const [endDateExpSaved, setEndDateExpSaved] = useState(false);
  const [coverLetterSaved, setCoverLetterSaved] = useState(false);
  
  const [pastExperiences, setPastExperiences] = useState([
    {
      expType: '',
      companyName: '',
      companyWebsite: '',
      role: '',
      startDateExp: '',
      endDateExp: '',
      coverLetter: '',
      expTypeSaved: false,
      companyNameSaved: false,
      companyWebsiteSaved: false,
      roleSaved: false,
      startDateExpSaved: false,
      endDateExpSaved: false,
      coverLetterSaved: false,
    },]);

  const handleFieldSubmit = (field, points, setSaved) => {
    const updatedPoints = user[field] ? 0 : points;

    const updatedUser = { ...user, [field]: user[field] || eval(field) };
    const updatedTotalScore = totalScore + updatedPoints;
    setTotalScore(updatedTotalScore);
    a=updatedTotalScore;
    updateUser(user.email, updatedTotalScore, updatedUser);
    setSaved(true);
  };

    const handleAddExperience = () => {
      setPastExperiences((prevExperiences) => [
        ...prevExperiences,
        {
          expType: '',
          companyName: '',
          companyWebsite: '',
          role: '',
          startDateExp: '',
          endDateExp: '',
          coverLetter: '',
          expTypeSaved: false,
          companyNameSaved: false,
          companyWebsiteSaved: false,
          roleSaved: false,
          startDateExpSaved: false,
          endDateExpSaved: false,
          coverLetterSaved: false,
        },
      ]);
    };
  

  const handleExperienceFieldChange = (index, field, value) => {
    setPastExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index][field] = value;
      return updatedExperiences;
    });
  };

  const setExperienceFieldSaved = (index, field) => {
    setPastExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index][`${field}Saved`] = true;
      return updatedExperiences;
    });

    
  };

  

  return (
    <div>

<div className='header'>
      <p>{user.email}</p>
        <h3>Coins Earned: {totalScore}</h3>
        
        <div>
          <button className='button1' onClick={handleInternship}>Apply For Jobs</button>
        </div>
      </div>

    <div className='a'>
      <h3>Personal Details</h3>
      <div className='b'>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={nameSaved}
      />
      <button onClick={() => handleFieldSubmit('name', 1, setNameSaved)} disabled={nameSaved}>
        {nameSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='b'>
      <label>Mobile:</label>
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        disabled={mobileSaved}
      />
      <button onClick={() => handleFieldSubmit('mobile', 15, setMobileSaved)} disabled={mobileSaved}>
        {mobileSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='c'>
      
      <label>Profile Pic:</label>
      
      <input
        type="file"
        onChange={(e) => setProfilePic(e.target.value)}
        disabled={profilePicSaved}
      />
      <button onClick={() => handleFieldSubmit('profilePic', 5, setProfilePicSaved)} disabled={profilePicSaved}>
        {profilePicSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='b'>
      <label>LinkedIn Link:</label>
      <input
        type="text"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        disabled={linkedinSaved}
      />
      <button onClick={() => handleFieldSubmit('linkedin', 3, setLinkedinSaved)} disabled={linkedinSaved}>
        {linkedinSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='b'>
      <label>GitHub Link:</label>
      <input
        type="text"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        disabled={githubSaved}
      />
      <button onClick={() => handleFieldSubmit('github', 5, setGithubSaved)} disabled={githubSaved}>
        {githubSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='c'>
      <label>Resume:</label>
      <input
        type="file"
        onChange={(e) => setResume(e.target.value)}
        disabled={resumeSaved}
      />
      <button onClick={() => handleFieldSubmit('resume', 20, setResumeSaved)} disabled={resumeSaved}>
        {resumeSaved ? 'Saved' : 'Save'}
      </button></div>

      </div>

      <div className='line'></div>

      <br/><br/>

      {/* Education Details */}
      <div className='a'>
      <h3>Education Details</h3>
      <div className='d'>
      <label>Type(School/College):</label>
      <select
        value={eduType}
        onChange={(e) => setEduType(e.target.value)}
        disabled={eduTypeSaved}
      >
        <option value="">Select Type</option>
        <option value="School">School</option>
        <option value="College">College</option>
      </select>
      <button onClick={() => handleFieldSubmit('eduType', 5, setEduTypeSaved)} disabled={eduTypeSaved}>
        {eduTypeSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='b'>
      <label>School/College Name:</label>
      <input
        type="text"
        value={schoolCollege}
        onChange={(e) => setSchoolCollege(e.target.value)}
        disabled={schoolCollegeSaved}
      />
      <button onClick={() => handleFieldSubmit('schoolCollege', 5, setSchoolCollegeSaved)} disabled={schoolCollegeSaved}>
        {schoolCollegeSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='f'>
      <label>Start Date (Edu):</label>
      <input
        type="date"
        value={startDateEdu}
        onChange={(e) => setStartDateEdu(e.target.value)}
        disabled={startDateEduSaved}
      />
      <button onClick={() => handleFieldSubmit('startDateEdu', 2, setStartDateEduSaved)} disabled={startDateEduSaved}>
        {startDateEduSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='f'>
      <label>End Date (Edu):</label>
      <input
        type="date"
        value={endDateEdu}
        onChange={(e) => setEndDateEdu(e.target.value)}
        disabled={endDateEduSaved}
      />
      <button onClick={() => handleFieldSubmit('endDateEdu', 2, setEndDateEduSaved)} disabled={endDateEduSaved}>
        {endDateEduSaved ? 'Saved' : 'Save'}
      </button></div>

      </div>

      <div className='line'></div>

      <br/><br/>

      {/* Project Details */}
      <div className='a'>
      <h3>Project Details</h3>
      <div className='b'>
      <label>Project Name:</label>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        disabled={projectNameSaved}
      />
      <button onClick={() => handleFieldSubmit('projectName', 5, setProjectNameSaved)} disabled={projectNameSaved}>
        {projectNameSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='b'>
      <label>Project Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={descriptionSaved}
      />
      <button onClick={() => handleFieldSubmit('description', 6, setDescriptionSaved)} disabled={descriptionSaved}>
        {descriptionSaved ? 'Saved' : 'Save'}
      </button></div>

      <div className='d'>
      <label>Solo Project/Group Project:</label>
  <select
    value={projectType}
    onChange={(e) => setProjectType(e.target.value)}
    disabled={projectTypeSaved}
  >
    <option value="">Select Type</option>
    <option value="Solo Project">Solo Project</option>
    <option value="Group Project">Group Project</option>
  </select>
  <button onClick={() => handleFieldSubmit('projectType', 4, setProjectTypeSaved)} disabled={projectTypeSaved}>
    {projectTypeSaved ? 'Saved' : 'Save'}
  </button></div>

  <div className='b'>
  <label>Project Link:</label>
  <input
    type="text"
    value={projectLink}
    onChange={(e) => setProjectLink(e.target.value)}
    disabled={projectLinkSaved}
  />
  <button onClick={() => handleFieldSubmit('projectLink', 10, setProjectLinkSaved)} disabled={projectLinkSaved}>
    {projectLinkSaved ? 'Saved' : 'Save'}
  </button></div>

  </div>

  <div className='line'></div>


  <br/><br/>

  {/* Past Experience Details */}
  <div className='a'>
  <h3> Experience Details</h3>

  <div className='d'>
  <label>Type (Internship/Job):</label>
  <select
    value={expType}
    onChange={(e) => setExpType(e.target.value)}
    disabled={expTypeSaved}
  >
    <option value="">Select Type</option>
    <option value="Internship">Internship</option>
    <option value="Job">Job</option>
  </select>
  <button onClick={() => handleFieldSubmit('expType', 5, setExpTypeSaved)} disabled={expTypeSaved}>
    {expTypeSaved ? 'Saved' : 'Save'}
  </button></div>

<div className='b'>
  <label>Company Name:</label>
  <input
    type="text"
    value={companyName}
    onChange={(e) => setCompanyName(e.target.value)}
    disabled={companyNameSaved}
  />
  <button onClick={() => handleFieldSubmit('companyName', 10, setCompanyNameSaved)} disabled={companyNameSaved}>
    {companyNameSaved ? 'Saved' : 'Save'}
  </button></div>

  <div className='b'>
  <label>Company Website Link:</label>
  <input
    type="text"
    value={companyWebsite}
    onChange={(e) => setCompanyWebsite(e.target.value)}
    disabled={companyWebsiteSaved}
  />
  <button onClick={() => handleFieldSubmit('companyWebsite', 10, setCompanyWebsiteSaved)} disabled={companyWebsiteSaved}>
    {companyWebsiteSaved ? 'Saved' : 'Save'}
  </button></div>

  <div className='b'>
  <label>Role:</label>
  <input
    type="text"
    value={role}
    onChange={(e) => setRole(e.target.value)}
    disabled={roleSaved}
  />
  <button onClick={() => handleFieldSubmit('role', 8, setRoleSaved)} disabled={roleSaved}>
    {roleSaved ? 'Saved' : 'Save'}
  </button></div>

  <div className='f'>
  <label>Start Date (Exp):</label>
  <input
    type="date"
    value={startDateExp}
    onChange={(e) => setStartDateExp(e.target.value)}
    disabled={startDateExpSaved}
  />
  <button onClick={() => handleFieldSubmit('startDateExp', 2, setStartDateExpSaved)} disabled={startDateExpSaved}>
    {startDateExpSaved ? 'Saved' : 'Save'}
  </button></div>

  <div className='f'>
  <label>End Date (Exp):</label>
  <input
    type="date"
    value={endDateExp}
    onChange={(e) => setEndDateExp(e.target.value)}
    disabled={endDateExpSaved}
  />
  <button onClick={() => handleFieldSubmit('endDateExp', 2, setEndDateExpSaved)} disabled={endDateExpSaved}>
    {endDateExpSaved ? 'Saved' : 'Save'}
  </button></div>
  </div>


<div className='line'></div>
<br/>

<div className='a'>
  <label>Cover Letter:</label>
  <div className='c'>
  <input
    type="file"
    onChange={(e) => setCoverLetter(e.target.value)}
    disabled={coverLetterSaved}
  />
  <button onClick={() => handleFieldSubmit('coverLetter', 20, setCoverLetterSaved)} disabled={coverLetterSaved}>
    {coverLetterSaved ? 'Saved' : 'Save'}
  </button></div>
  </div>
  <br/>
</div>
);
};

export default Profile;
export {a};
