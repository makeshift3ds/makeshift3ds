/* Import the css so it is run through css-loader */
import './assets/css/normalize.css';
import './assets/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TypeWriter from './libs/typewriter.js';

ReactDOM.render(
  <main id="app">
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
    <div id="editor">
      <div id="tabs">
        <ul>
          <li className="active">index.html</li>
        </ul>
      </div>
      <div id="editor-container">
        <div id="gutter">
          <p>1</p>
          <p>2</p>
        </div>
        <div id="code-window">
          <p className="typed">
            Hello my name is Ken Elliott
            <b>and</b> I code everything.
          </p>
          <p className="typed">
            Hello my name is Ken Elliott and I code everything.
          </p>
        </div>
      </div>
      <div id="footer" />
    </div>
  </main>,

  document.getElementById('root'),

  () => {
    const typer = new TypeWriter();
    typer.startTyping();
  }
);
