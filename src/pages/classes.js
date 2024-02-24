import React from 'react';
import './classes.css'

// Epsilon
import antonio from './members/epsilon/antonio.JPG'
import ariel from './members/epsilon/ariel.JPG'
import ariya from './members/epsilon/ariya.JPG'
import caleb from './members/epsilon/caleb.JPG'
import delphine from './members/epsilon/delphine.JPG'
import elisa from './members/epsilon/elisa.JPG'
import felix from './members/epsilon/felix.JPG'
import jessicahu from './members/epsilon/jessicahu.JPG'
import jessicatam from './members/epsilon/jessicatam.JPG'
import joseph from './members/epsilon/joseph.JPG'
import pahel from './members/epsilon/pahel.JPG'
import samantha from './members/epsilon/samantha.JPG'

// Delta
import byren from './members/delta/byren.jpg'
import clare from './members/delta/clare.JPG'
import daniel from './members/delta/daniel.jpg'
import jai from './members/delta/jai.JPG'
import kai from './members/delta/kai.jpg'
import michelle from './members/delta/michelle.jpg'
import shreya from './members/delta/shreya.jpg'
import vishwa from './members/delta/vishwa.JPG'

const epsilonData = [
  {
    id: 1,
    name: 'Antonio Li',
    photo: antonio
  },

  {
    id: 2,
    name: 'Ariel Tjandra',
    photo: ariel
  },

  {
    id: 3,
    name: 'Ariya Gowda',
    photo: ariya
  },

  {
    id: 4,
    name: 'Caleb Chung',
    photo: caleb
  },

  {
    id: 5,
    name: 'Delphine Tai-Beauchamp',
    photo: delphine
  },

  {
    id: 6,
    name: 'Elisa Yan',
    photo: elisa
  },

  {
    id: 7,
    name: 'Felix Toffaneto-Werner',
    photo: felix
  },

  {
    id: 8,
    name: 'Jessica Hu',
    photo: jessicahu
  },

  {
    id: 9,
    name: 'Jessica Tam',
    photo: jessicatam
  },

  {
    id: 10,
    name: 'Joseph Marquez',
    photo: joseph
  },

  {
    id: 11,
    name: 'Pahel Srivastava',
    photo: pahel
  },

  {
    id: 12,
    name: 'Samantha Gibbons',
    photo: samantha
  },

  ];

  const deltaData = [
    {
      id: 1,
      name: 'Byren Cheema',
      photo: byren
    },
  
    {
      id: 2,
      name: 'Clare Wu',
      photo: clare
    },
  
    {
      id: 3,
      name: 'Daniel Yi',
      photo: daniel
    },
  
    {
      id: 4,
      name: 'Jai Hathiramani',
      photo: jai
    },
  
    {
      id: 5,
      name: 'Kai Meyers',
      photo: kai
    },
  
    {
      id: 6,
      name: 'Michelle Lei',
      photo: michelle
    },
  
    {
      id: 7,
      name: 'Shreya Mawandia',
      photo: shreya
    },
  
    {
      id: 8,
      name: 'Vishwa Shah',
      photo: vishwa
    },
  
  ];

function Members() {
  return (
    <div>
      <h1 className='classes-title'>Classes</h1>
      <h2 className='classes'>Epsilon</h2>
      <div className="classes-grid">
        {epsilonData.map((member) => (
          <div key={member.id} className="classes-item">
            <img src={member.photo} alt={member.name} className="classes-photo" />
            <div className="classes-name">{member.name}</div>
          </div>
        ))}
      </div>
      <h2 className='classes'>Delta</h2>
      <div className="classes-grid">
        {deltaData.map((member) => (
          <div key={member.id} className="classes-item">
            <img src={member.photo} alt={member.name} className="classes-photo" />
            <div className="classes-name">{member.name}</div>
          </div>
        ))}
      </div>
      <div className="page-spacer"><h2 className='footer'>Sigma Eta Pi at UCI 2024</h2></div>
    </div>
  );
}


export default Members;