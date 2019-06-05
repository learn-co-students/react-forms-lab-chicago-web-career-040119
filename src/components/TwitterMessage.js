import React from "react";
//controlled component
class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

handleChange = (event) => {
  this.setState({
    message: event.target.value
  })
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/*adding the attributes to the <input> element, its value should be saved in the component's state and should update on every change to the input*/}
        <input type="text" name="message" id="message" onChange={event=>this.handleChange(event)} value={this.state.message}/>
        {/*we have access to maxChar props from the parent, which is the max of chars => we can show remaining chars*/}
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
