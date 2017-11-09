import React from 'react';
import Nav from './nav.jsx';
import Editor from './editor.jsx';

export default class App extends React.Component {
  render() {
    return (
      <main id="app">
        <Nav />
        <Editor />
      </main>
    );
  }
}
