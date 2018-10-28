import  React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
    constructor(props){
	super(props);
    }
    
    onSubmit(event){
	console.log("hi", event);
	event.preventDefault();
	axios.post('http://localhost:8080/login',);
     }
    render(){
	return(
	       <div className='loginForm'>
	       <form method='post' action="/">
	       <h1>Login:</h1>
	       <br/>
	       <input type="text" name="user"/>
	       <input type="password" name="passwd"/>
	       <button onClick={this.onSubmit} >Submit</button>
	       </form>
	       </div>
	       );
   }

}

export default LoginForm;
