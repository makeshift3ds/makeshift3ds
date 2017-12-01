import React from 'react';
import css from './home.css';
import ArticleBlock from '../ArticleBlock/article-block.jsx';

/* polyfill for async await */
import BabelPolyfill from 'babel-polyfill';

export default class Home extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      this.setState({
        posts,
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {
    return <section className="home">
        {this.state.posts.length && this.state.posts.map(post => (
            <ArticleBlock post={post} key={post.id} />
          ))}
      </section>;
  }
}
