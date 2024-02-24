import React from 'react';
import './board.css'
import ayaan from './members/board/ayaan.jpg'
import byren from './members/board/byren.jpg'
import danielyi from './members/board/daniel.jpg'
import michelle from './members/board/michelle.jpg'
import shreya from './members/board/shreya.jpg'
import rithwik from './members/board/rithwik.jpg'

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
      <div className="board-grid">
        {membersData.map((member) => (
          <div key={member.id} className="board-item">
            <img src={member.photo} alt={member.name} className="board-photo" />
            <div className="board-position">{member.position}</div>
            <div className="board-name">{member.name}</div>
          </div>
        ))}
      </div>
      <div className="page-spacer"><h2 className='footer'>Sigma Eta Pi at UCI 2024</h2></div>
    </div>
  );
}


export default Members;