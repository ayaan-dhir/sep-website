import React from 'react';
import './members.css'
import pahel from './pahel.png'
import ayaan from './ayaan.png'
import ayaan2 from './ayaan2.png'
import jai_hind from './jai_hind.png'

const membersData = [
    {
      id: 1,
      name: 'Pahel Srivastava',
      photo: pahel
    },
    {
      id: 2,
      name: 'AYD',
      photo: ayaan
    },

    {
      id: 3,
      name: 'Tweaker',
      photo: ayaan2
    },
    
    {
      id: 4,
      name: 'Jai Hind',
      photo: jai_hind
    },
    // Add more members as needed
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