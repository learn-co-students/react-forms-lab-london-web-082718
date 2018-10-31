import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  updateMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  charsRemaining = () => {
    let charsRemain = (this.props.maxChars - this.state.message.length)
    return charsRemain
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={event => this.updateMessage(event)}/>
        {this.charsRemaining()} characters remaining
      </div>
    );
  }
}

export default TwitterMessage;
