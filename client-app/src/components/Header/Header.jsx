import  React from 'react';
import '../../bootstrap-4.1.3-dist/css/bootstrap.min.css';

var headerStyle = {
    "background":"orange",
    "color":"white",
    "width":"100%",
    "position":"absolute"
};
class Header extends React.Component {

    render(){
	return(
	       <div className='header' style={headerStyle}>
                <center><h2 className="col-4">League Quiz App</h2></center>
	       </div>
	       );
   }

}

export default Header;
