import React from 'react';

class SessionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);
  }

  emailChange(e) {
    this.setState({email: e.target.value});
  }

  passwordChange(e) {
    this.setState({password: e.target.value});
  }

  login(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  render() {

    return(
      <div className="modal">
          <form className="modal-form">

            <span className="modal-close js-modal-close">&times;</span>

            <div className="input">
              <label>Email</label>
              <input type="text" onChange={this.emailChange}></input>
            </div>

            <div className="input">
              <label>Password</label>
              <input type="password" onChange={this.passwordChange}></input>
            </div>

            <div className="submit">
              <button onClick={this.login}>Sign In</button>
              <span className="button-alternative">or <strong className="js-modal-close">Cancel</strong></span>
            </div>

          </form>
          <div className="modal-screen js-modal-close"></div>
        </div>
    )
  }

};

export default SessionsModal;
