import React from 'react';
import './fe.css'

import ayaan from './members/alpha/ayaan.jpg'

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
      <div className='fe-note-page'>
        <h1 className='headings'>A Note from Our FE</h1>
        <div className="fe-content-wrapper"> {/* Wrapper for image and text */}
          <div className="fe-photo"><img src={ayaan} alt="Founder's Ed"></img></div>
          <div className="fe-text">
            <p>"Hi everyone! My name is Ayaan and I focus on building startups through our Founder's Education, our program designed to help you chase after your entrepreneurial endeavors.
              Beyond our curriculum, our program is heavily focused on collaboration and community as you get to build alongside your cohort. What makes FE so special is that it caters to all experience levels. 
              We have had members come in with no experience who later go on to pursue entrepreneurship full-time and we also have members who have started ventures before joining who find their co-founders for their next startup.
              FE is the place where innovators at UCI come to build!"
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FoundersEducation;