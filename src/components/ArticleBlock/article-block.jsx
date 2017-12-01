import React from 'react';
import css from './article-block.css';
import PropTypes from 'prop-types';

export default class ArticleBlock extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      title: PropTypes.string.required
    })
  }
  
  render() {
    let {title} = this.props.post;

    return (
      <article className="article-block">
        <h2>{title}</h2>
      </article>
    );
  }
}
