import React from 'react';
import '../style/SidebarL.css';

function SidebarL({ text, Icon }) {
  return (
    <div className="material-ui">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarL;

// virkaði ekki að setja Icon við hlið text = {text} - {Icon}
