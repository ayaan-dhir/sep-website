import React from 'react';
import './members.css'
// import ayaan from './members/ayaan.jpg'
import byren from './members/byren.jpg'
import danielyi from './members/daniel.jpg'
import michelle from './members/michelle.jpg'
import shreya from './members/shreya.jpg'

const membersData = [
    {
      id: 1,
      name: 'Shreya Mawandia',
      photo: shreya
    },
    {
      id: 2,
      name: 'Byren Cheema',
      photo: byren
    },

    {
      id: 3,
      name: 'Daniel Yi',
      photo: danielyi
    },
    
    {
      id: 4,
      name: 'Michelle Lei',
      photo: michelle
    },
  ];

function Members() {
  return (
    <div>
      <h1>Members Page</h1>
      <div className="members-grid">
        {membersData.map((member) => (
          <div key={member.id} className="member-item">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <div className="member-name">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Members;