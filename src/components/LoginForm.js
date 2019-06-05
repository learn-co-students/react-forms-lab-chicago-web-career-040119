import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username && password) {
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={event => this.onSubmitHandler(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.onChangeHandler(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.onChangeHandler(event)} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button  type="submit">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
