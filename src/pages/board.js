import React, { useEffect } from 'react';
import './board.css'
import ayaan from './members/ayaan.jpg'
import byren from './members/byren.jpg'
import danielyi from './members/daniel.jpg'
import michelle from './members/michelle.jpg'
import shreya from './members/shreya.jpg'
import rithwik from './members/rithwik.jpg'

const membersData = [
    {
      id: 1,
      position: 'President',
      name: 'Shreya Mawandia',
      photo: shreya
    },
    {
      id: 2,
      position: 'VP of External Affairs',
      name: 'Byren Cheema',
      photo: byren
    },

    {
      id: 3,
      position: 'VP of Internal Affairs',
      name: 'Daniel Yi',
      photo: danielyi
    },
    
    {
      id: 4,
      position: 'VP of Marketing',
      name: 'Michelle Lei',
      photo: michelle
    },

    {
      id: 5,
      position: 'VP of Finance',
      name: 'Rithwik Kerur',
      photo: rithwik
    },

    {
      id: 6,
      position: 'VP of Founder\'s Education',
      name: 'Ayaan Dhir',
      photo: ayaan
    },

  ];

function Members() {
  return (
    <div>
      <h1 className='board-title'>Board</h1>
      <div className="members-grid">
        {membersData.map((member) => (
          <div key={member.id} className="member-item">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <div className="member-position">{member.position}</div>
            <div className="member-name">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Members;