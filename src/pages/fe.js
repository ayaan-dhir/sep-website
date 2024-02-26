import React from 'react';
import './fe.css'

const curriculumItems = [
  { title: 'Problem Discovery'},
  { title: 'Customer Discovery'},
  { title: 'Minimum Viable Product'},
  { title: 'Market Analysis'},
  { title: 'Finance'},
  { title: 'Branding'},
  { title: 'Networking'},
  { title: 'Pitching'},
];

function FoundersEducation() {
  return (
    <div>
      <div className='fe-page'>
        <h1 className='fe-center-text'>Founder's Education</h1>
        <p className='fe-subtext'>Our Startup Accelerator</p>
      </div>
      <div className='fe-page2'>
        <h1 className='headings'>Our Curriculum</h1>
        <div className="curriculum-container">
      <div className="curriculum-grid">
        {curriculumItems.map((item, index) => (
          <div key={index} className="curriculum-item">
            <div className="title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default FoundersEducation;