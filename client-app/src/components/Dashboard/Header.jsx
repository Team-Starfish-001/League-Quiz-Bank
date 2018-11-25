import  React from 'react';

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
                <center><h2>League Quiz App</h2></center>
	       </div>
	       );
   }

}

export default Header;
