import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="footer-container">
        <div className="footer-top">

          <div className="footer-social">
              <h4 className="footer-list-header">Connect with me</h4>
              <div className="footer-social-icon-row">
                <div className="github-icon"></div>
                <div className="linkedin-icon"></div>
              </div>
          </div>
          <div className="footer-about">
            <h4 className="footer-list-header">About TixFix</h4>
            <div>
              <ul className="footer-list">
                <li><a>About us</a></li>
                <li><a>Careers</a></li>
                <li><a>Help</a></li>
                <li><a>Partners</a></li>
                <li><a>Press Box</a></li>
                <li><a>Terms, Privacy & Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-fans">
            <h4 className="footer-list-header">Fan Fix</h4>
            <ul className="footer-list">
              <li><a>Events by venue</a></li>
              <li><a>Gift cards</a></li>
              <li><a>Last Minute Services</a></li>
              <li><a>Notifications</a></li>
              <li><a>The TixFix Promise</a></li>
            </ul>
          </div>
  
        </div>
      </div>
    )
  }
}

export default Footer;
