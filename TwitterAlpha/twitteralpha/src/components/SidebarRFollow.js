import React from 'react';
import '../style/SidebarRFollow.css';

function SidebarRFollow({ headline, name }) {
  return (
    <div className="material">
      <h3>{headline}</h3>
      <p>{name}</p>
    </div>
  );
}

export default SidebarRFollow;
