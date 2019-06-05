import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingChars: props.maxChars,
      input: ""
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      remainingChars: this.props.maxChars - event.target.value.length,
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.onChangeHandler(event)} type="text" name="message" id="message" maxLength={this.props.maxChars} value={this.state.input}/>
        <p>{this.state.remainingChars} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
