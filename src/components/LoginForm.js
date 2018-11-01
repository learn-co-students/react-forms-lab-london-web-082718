import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

formComplete = (event) => {
  event.preventDefault()
  if(this.state.username && this.state.password) {
    this.props.onSubmit(this.state)
  }else{
    console.log('Error! Please fill out both fields')
  }
}

  render() {
    return (
      <form onSubmit={event => this.formComplete(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
