import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxCharas: this.props.maxChars
    };
  }

  handleMessage = event => {
    this.setState({
      [event.target.name]: event.target.value,
      maxCharas: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessage} type="text" name="message" id="message" value={this.state.message} />
        <p>Characters left: {this.state.maxCharas}</p>
      </div>
    );
  }
}

export default TwitterMessage;
