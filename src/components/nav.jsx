import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav id="links">
        <ul>
          <li id="header">Explorer</li>
          <li className="link-header">Pages</li>
          <li>
            <a href="#home" className="site-link active">
              Home
            </a>
          </li>
          <li>
            <a href="#porfolio" className="site-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" className="site-link">
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" className="site-link">
              Contact
            </a>
          </li>
          <li className="link-header">Social Links</li>
        </ul>
      </nav>
    );
  }
}
