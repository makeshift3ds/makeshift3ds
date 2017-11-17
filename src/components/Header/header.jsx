import React from 'react';
import css from './header.css';
import Nav from '../Nav/nav.jsx';

const Header = () => (
  <header>
    <Nav />
    <div id="header-content-container">
      <div id="header-avatar">
        <img
          src="http://res.cloudinary.com/makeshift3ds/image/upload/makeshift-header-avatar_omdbug.jpg"
          sizes="(max-width: 630px) 150px, 250px"
          srcSet="
		http://res.cloudinary.com/makeshift3ds/image/upload/w_150/makeshift-header-avatar_omdbug.jpg 150w,
		http://res.cloudinary.com/makeshift3ds/image/upload/w_250/makeshift-header-avatar_omdbug.jpg 250w"
          alt="Circle image of middle aged man smiling on opaque palm tree gradient background."
        />
      </div>
      <div className="header-content">Full Stack Engineer / Designer</div>
    </div>
  </header>
);

export default Header;
