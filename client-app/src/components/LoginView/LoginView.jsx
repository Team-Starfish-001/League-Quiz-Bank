import React from 'react';
import TextField from '@material-ui/core/TextField';
import './LoginView.css';

class LoginView extends React.Component {
	render() {
		return (
			<body>
				<div id='all_wrapper'>
			  	<div id='head'>
						<h2 id='head_text'>The League Of Amazing Programmers Quiz Bank</h2>
			    </div>
			    <div id='wrapper'>
						<div id='league_picture_container'>
			      	<img id='league_picture' src='https://raw.githubusercontent.com/camman00/League-Quiz-Bank-Client/master/LeagueQuizBank_HTML/LeagueLogoFFINAL2.jpg'/>
			      </div>
			      <div id="content" >
							<form onSubmit={this.handleSubmit} id="f1" method="post">
								<label>
									Username: <input type="text" id="username" name="user" value="" /><br />
								</label>
								<label>
									Password: <input type="text" id="password" name="pass" value="" /><br />
								</label>
								<input type="submit" class="select_button" id="student_button" value="Student" />
								<input type="submit" class="select_button" id="teacher_button" value="Teacher" formaction="/Teacher.html" />
							</form>
						</div>
			     </div>
			     <div class='footer'>
			        <a id='panel_left' href='http://www.jointheleague.org/'>
			        	<img id='league_bolt' src='https://raw.githubusercontent.com/camman00/League-Quiz-Bank-Client/master/LeagueQuizBank_HTML/bolt.png' />
			        </a>
			        <div id='center'>
			          <p id='footer_text'>The League Quiz Bank was created by Team Starfish. Check out their GitHub by clicking the right side icon! </p>
			        </div>
			        <a id='panel_right' href='https://github.com/Team-Starfish-001'>
			          <img id='github' src="https://raw.githubusercontent.com/camman00/League-Quiz-Bank-Client/master/LeagueQuizBank_HTML/transparentgithub.png" />
			        </a>
			      </div>
			   	</div>
			  </body>
		)
	}
}

export default LoginView;
