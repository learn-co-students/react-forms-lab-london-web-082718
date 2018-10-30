import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    console.log(event.target.value)
    if (event.target.value.length) {
      this.setState({
        message: event.target.value
      })
    } 
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(e) => this.setState({message: e.target.value})} type="text" value={this.state.message} />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
