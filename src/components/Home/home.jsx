import React from 'react';
import css from './home.css';
import SectionBlock from '../SectionBlock/section-block.jsx';

/* polyfill for async await */
import BabelPolyfill from 'babel-polyfill';

export default class Home extends React.Component {
  state = {
    posts: [],
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      this.setState({
        posts,
      });
      console.log(posts);
    } catch (e) {
      console.log('error');
    }
  }

  render() {
    return (
      <section className="home">
        <SectionBlock />

        {this.state.posts.length}
      </section>
    );
  }
}
