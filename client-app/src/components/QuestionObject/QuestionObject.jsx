import React from 'react';

class QuestionObject extends React.Component {
      createForm(){
      	       let option = this.props.data.type;
	       switch(option){
		case "single":
		     return(
			<form id={this.props.data.index}>
			  {this.props.data.choices.map((e)=>{
			  <input type="radio" name={this.props.data.index}/>
			  })}
  	 	      	</form> 
		     );
		break;
		case "multiple":
		break;
		case "fill":
		break;
		default:
		}
		
      }
     render(){
        return(
                <div>
			<h2>#{this.props.data.index}. </h2>
			<h3>{this.props.data.prompt}</h3>
			<br/>
			{createForm()}
                </div>
        );
      }
}
export default QuestionObject;