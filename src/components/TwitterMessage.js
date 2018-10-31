import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }
  }

  updateMessage = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" onChange={this.updateMessage} value={this.state.userInput}
        />
        <p>{this.props.maxChars - this.state.userInput.length} characters remaining</p>
      </div>
    );
  }
}
export default TwitterMessage;
