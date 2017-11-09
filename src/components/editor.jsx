import React from 'react';

import TypeWriter from '../libs/typewriter';

export default class Editor extends React.Component {
  render() {
    return (
      <div id="editor">
        <div id="tabs">
          <ul>
            <li className="active">index.html</li>
          </ul>
        </div>
        <div id="editor-content">
          <div id="gutter">
            <p>1</p>
          </div>
          <div id="code-window">
            <p className="typed">
              Hello my name is Ken Elliott and I type codes
            </p>
          </div>
        </div>
        <div id="footer" />
      </div>
    );
  }

  componentDidMount() {
    const typer = new TypeWriter();
    typer.startTyping();
  }
}
