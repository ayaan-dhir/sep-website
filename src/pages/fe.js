import React from 'react';
import './fe.css'

const curriculumItems = [
  { title: 'Problem Discovery' },
  { title: 'Customer Discovery' },
  { title: 'Minimum Viable Product' },
  { title: 'Market Analysis' },
  { title: 'Finance' },
  { title: 'Branding' },
  { title: 'Networking' },
  { title: 'Pitching' },
];

function FoundersEducation() {
  return (
    <div>
      <div className='fe-page'>
        <h1 className='fe-center-text'>Founder's Education</h1>
        <p className='fe-subtext'>Our Startup Accelerator</p>
      </div>
      <div className='fe-pages'>
      <h1 className='headings'>The Program</h1>
      <p className='fe-subtext'>Founder's Education is our 8-week startup incubator program focused on helping you think and build like an entrepreneur.</p>
      </div>
      <div className='fe-pages'>
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