import  React from 'react';
import QuizList from '../QuizList/QuizList.jsx';

var ContentStyle = {
    "box-sizing-property":"border-box",
    "float":"left",
    "width":"",
    "border":"1px solid black"
}

class Content extends React.Component {

    render(){
	return(
	       <div style={ContentStyle}>
               <QuizList data={this.props.data}/>
           </div>
	       );
   }

}

export default Content;
