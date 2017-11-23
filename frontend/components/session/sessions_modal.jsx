import React from 'react';
import { Link } from 'react-router-dom';

class SessionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: "", first_name: "", last_name: ""};
    this.props.clearErrors();
    this.demoLogin = this.demoLogin.bind(this);
    this.type = this.type.bind(this);
  }

  demoLogin() {
    let email = "demoemail@email.com";
    let password = "password";
    let currentChar=1;

    this.type('email', email, currentChar);
    this.type('password', password, currentChar);

  }

  type(field, word, currentChar, cb) {
    let i = currentChar;
    this.setState({[field]: word.substr(0, i)});
    i++;
    if (i <= word.length) {
      setTimeout(() => this.type(field, word, i), 110);
    } else {
      if (field === 'email') {
        setTimeout(() => this.props.loginUser(this.state), 200);
      }
    }
  }


  update(property) {
   return e => this.setState({ [property]: e.target.value });
 }

  renderHeader() {
    if(this.props.location.pathname === '/new') {
      return "Sign up and make it happen"
    } else {
      return "Get seats you'll love, anytime"
    }
  }

  renderErrors() {
    if(this.props.errors.length > 1) {
      return (
        <ul className="error-list">
          {this.props.errors.map(error => <li>{error}</li>)}
        </ul>
      )
    } else if (this.props.errors.length === 1) {
      return (
        <span className="error-list">{this.props.errors[0]}</span>
      )
    }
  }

  renderNameInput(){
    if(this.props.location.pathname === '/new'){
      return (
        <div className="name-input">
          <div className="input">
            <input type="text" onChange={this.update('first_name')} placeholder={"First Name"}></input>
          </div>
          <div className="input">
            <input type="text" onChange={this.update('last_name')} placeholder={"Last Name"}></input>
          </div>
        </div>
      )
    }
  }

  renderResetPassword(){
    if(this.props.location.pathname === '/session') {
      return (
        <div className="reset-password">
          <p><a >Forgot your password?</a></p>
          <p><a onClick={this.demoLogin}>Demo Login</a></p>
        </div>
      )
    }
  }

  renderSignInButton() {
    if(this.props.location.pathname === '/session') {
      return (
        <div className="submit">
          <button onClick={() => this.props.loginUser(this.state)}><span>Sign In</span></button><br/>
        </div>
      )
    } else {
      return (
        <div className="submit">
          <button onClick={() => this.props.createUser(this.state)}><span>Sign Up</span></button><br/>
        </div>
      )
    }
  }

  renderSignInPrompt(){
    if(this.props.location.pathname === '/session') {
      return (
        <div className="sign-up">
          <p><span>New to TixFix?</span><Link to="/new"> Sign Up</Link></p>
        </div>
      )
    } else {
      return (
        <div className="sign-in">
          <p><span>Have a TixFix account?</span><Link to="/session"> Sign in</Link></p>
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

    return(
      <div className="modal is-open">
          <form className="modal-form">
            <div className="white-box"></div>
            <div className="modal-form-container" >
              <span className="modal-close js-modal-close">&times;</span>
              <span className="modal-header">{this.renderHeader()}</span>
              <div className="modal-form-input-container">

                <button className="fb-button">
                  Sign in with facebook
                </button>
                <span className="connect-with-fb">Connect with friends on TixFix</span>
                <div className="hr-divider">

                  <hr></hr>

                  <span>OR</span>

                  <hr></hr>

                </div>
                {this.renderErrors()}

                {this.renderNameInput()}
                <div className="input">
                  <input id="emailInput" type="text" onChange={this.update('email')} placeholder={"Email"} value={this.state.email}></input>
                </div>
                <div className="input">
                  <input id="pwInput" type="password" onChange={this.update('password')} placeholder={"Password"} value={this.state.password}></input>
                </div>
                <br/>

                {this.renderSignInButton()}

                <br/>

                {this.renderResetPassword()}
                {this.renderSignInPrompt()}

              </div>

            </div>
          </form>
          <div className="modal-screen js-modal-close"></div>
        </div>
    )
  }

};

export default SessionsModal;
