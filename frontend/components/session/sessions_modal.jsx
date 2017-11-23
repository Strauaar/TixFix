import React from 'react';
import { Link } from 'react-router-dom';

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

  renderNameInput(){
    if(this.props.location.pathname === '/new'){
      return (
        <div className="name-input">
          <div className="input">
            <input type="text" onChange={this.firstNameChange} placeholder={"First Name"}></input>
          </div>
          <div className="input">
            <input type="text" onChange={this.lastNameChange} placeholder={"Last Name"}></input>
          </div>
        </div>
      )
    }
  }

  render() {
    $("body").on("click", ".js-modal-open", function(event){
      event.preventDefault();
      $(".modal").addClass("is-open");
    });
    $("body").on("click", ".js-modal-close", function(event){
      event.preventDefault();
      $(".modal").removeClass("is-open");
      this.props.history.push("/");
    }.bind(this));
    console.log(this.props.location.pathname === '/session');
    return(
      <div className="modal is-open">
          <form className="modal-form">
            <div className="white-box"></div>
            <div className="modal-form-container" >
              <span className="modal-close js-modal-close">&times;</span>
              <span className="modal-header">Get seats you'll love, anytime</span>
              <div className="modal-form-input-container">

                <button className="fb-button">
                  Sign in with facebook
                </button>
                <span className="connect-with-fb">Connect with friends on TixFix</span>
                <div className="hr-divider">
                  <hr>

                  </hr>
                  <span>OR</span>
                  <hr>

                  </hr>
                </div>
                {this.renderNameInput()}
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
                <div className="sign-up">
                  <p><span>New to TixFix?</span><Link to="/new">Sign Up</Link></p>
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
