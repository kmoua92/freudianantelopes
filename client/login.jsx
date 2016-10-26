class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			attemptedLoginToggle: false,
			attemptedCreateToggle: false,
			errorMessage: ''
		};
	}

	loginSubmitHandler(e) {
		e.preventDefault();
		// POST to users/this.props.username
			// newUser = false;

	// handle submit for LOG IN
		// send POST request	
			// if response is 404
				// this.setState{attemptedLoginToggle: !this.state.attemptedLogin}
				// display message that login failed
			// else
				// log in user
				// redirect to homepage

	}

	createAccountHandler(e) {
		e.preventDefault();
		// POST to users/this.props.username
			// newUser = true;

		// if err	
			// this.setState{attemptedCreateToggle: !this.state.attemptedCreate}
			// display message that couldn't create account
		// else
			// log in user
			// redirect to homepage

	}

	// what gets entered sets App.props.user


	render() {

		return (
			<div className = 'login'>
				<form onSubmit={loginSubmitHandler}>
					<input className='username'></input>
					<input className='password'></input>
				</form>
				<div className='error-message'>{this.state.errorMessage}</div>
				<button type='button' className='create-account-button' onClick={createAccountHandler}>Create new account</button>
				<button type='button' className='login-button' onClick={loginSubmitHandler}>Log In</button>
			</div>
		);
	}
	

};


window.Login = Login;
