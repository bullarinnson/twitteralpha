import React from 'react';
import '../style/SidebarR.css';

function SidebarR({ text, headline, popul }) {
  return (
    <div className="material">
      <p>{text}</p>
      <h3>{headline}</h3>
      <p>{popul}</p>
    </div>
  );
}

export default SidebarR;
