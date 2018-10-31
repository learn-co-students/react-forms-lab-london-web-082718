import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateFields = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkBoth = (event) => {
    event.preventDefault()
    this.state.username && this.state.password
    ?
    this.props.onSubmit(this.state) :
    console.log('You must fill out both fields')
    
  }

  render() {
    return (
      <form onSubmit={event => this.checkBoth(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.updateFields(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.updateFields(event)}/>
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
