import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
       message: ''
     };
  }

  handleChange = (event) => {
    console.log(event.target.value)
      this.setState({
        message: event.target.value
      })
    }

  //
  // handleSubmit = (event) => {
  //   console.log('Tweet submitted:' + this.state.message)
  // }

  render() {
    return (
        <div>
          <strong>Your message:</strong>
          <input type="text" value={this.state.message} onChange={event => this.handleChange(event)}/>
          <strong>{ this.props.maxChars - this.state.message.length }</strong>
          <button type="submit">Send</button>
        </div>
    );
  }
}

export default TwitterMessage;
