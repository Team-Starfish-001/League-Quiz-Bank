import React from 'react';

var SidebarStyle = {
  boxSizingProperty: 'border-box',
  padding: '10px',
  width: '80px',
  float: 'left',
};

class Sidebar extends React.Component {
  render() {
    return (
      <div className='col-2' style={SidebarStyle}>
        <ul>
          <li>djfasf</li>
          <li>djfasf</li>
          <li>djfasf</li>
          <li>djfasf</li>
          <li>djfasf</li>
          <li>djfasf</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
