import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = event => {
  event.preventDefault()
  if (this.state.username && this.state.password)
  return this.props.handleLogin(this.state)
  //our entire state object is the controlled form data, so we can send the entire object arounbd
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={ event=> this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleChange(event)} />
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
