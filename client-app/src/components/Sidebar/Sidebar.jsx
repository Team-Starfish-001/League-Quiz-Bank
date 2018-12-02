import React from 'react';
import '../../bootstrap-4.1.3-dist/css/bootstrap.min.css';
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
            <div className="col-2" style={SidebarStyle}>
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
