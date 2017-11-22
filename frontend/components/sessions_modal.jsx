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
            <div className="white-box"></div>
            <div className="modal-form-container" >
              <span className="modal-close js-modal-close">&times;</span>
              <span className="modal-header">Get seats you'll love, anytime</span>
              <div className="modal-form-input-container">

                <div className="input">
                  <input type="text" onChange={this.emailChange} placeholder={"Email"}></input>
                </div>
                <div className="input">
                  <input type="password" onChange={this.passwordChange} placeholder={"Password"}></input>
                </div>
                <br/>

                <div className="submit">
                  <button onClick={this.login}><span>Sign In</span></button><br/>
                </div>
                <br/>

                <div className="reset-password">
                  <span><a href="#">Forgot your password?</a></span>
                </div>
              </div>
            </div>
          </form>
          <div className="modal-screen js-modal-close"></div>
        </div>
    )
  }

};

export default SessionsModal;
