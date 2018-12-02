import React from 'react';

var SidebarStyle = {
    "box-sizing-property":"border-box",
    "padding":"10px",
    "width":"80px",
    "float":"left"
}

class Sidebar extends React.Component {
    render() {
        var pages = ["Blah", "Blah", "Blah", "Blah"];

        return (
            <div className="sidebar" style={SidebarStyle}>
                <ul>
                    <li>djfasf</li>
                    <li>djfasf</li>
                    <li>djfasf</li>
                    <li>djfasf</li>
                    <li>djfasf</li>
                    <li>djfasf</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;