import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  render() {
    let footerData = this.props.footerData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {footerData.socialNetworks.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <i className={item.class} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="copyright">
              <li>{footerData.copyright}</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  footerData: PropTypes.object.isRequired
};

export default Footer;
