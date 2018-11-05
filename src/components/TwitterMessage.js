import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {laCrissDeString: ''};
  }

  handleChange = (e) => {
    this.setState({ laCrissDeString: e.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          onChange={event => this.handleChange(event)}
          value={this.state.laCrissDeString}
          placeholder="tweet tweet tweet"/>
        <div>{this.props.maxChars - this.state.laCrissDeString.length} characters left</div>
      </div>
    );
  }
}

export default TwitterMessage;
