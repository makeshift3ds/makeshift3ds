import React from 'react';
import css from './nav.css';

const Nav = () => (
  <nav>
    <span>Ken Elliott</span>
    <ul id="social-links">
      <li>
        <a href="#1" className="social-link">
          <svg viewBox="0 0 800 800" aria-hidden="true">
            <title>Github</title>
            <path d="M400 177c-127 0-223 103-223 223 0 104 72 188 160 214v-41c0-33 17-46 17-46-73-8-116-43-116-126 0-45 27-69 27-69s-14-26 2-67c25-6 71 26 71 26s24-9 63-9 63 9 63 9 46-32 71-26c16 41 2 67 2 67s27 24 27 69c0 83-43 118-116 126 0 0 17 13 17 46v41c87-27 158-109 158-214 0-120-96-223-223-223zm0-42c146 0 265 119 265 265S546 665 400 665 135 546 135 400s119-265 265-265z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#1" className="social-link">
          <svg viewBox="0 0 800 800" aria-hidden="true">
            <title>Twitter</title>
            <path d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#1" className="social-link">
          <svg viewBox="0 0 800 800" aria-hidden="true">
            <title>LinkedIn</title>
            <path d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z" />
            <circle cx="219" cy="220" r="56" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#1" className="social-link">
          <svg viewBox="0 0 800 800" aria-hidden="true">
            <title>CodePen</title>
            <path d="M140 478V321q0-12 10-19l238-158q12-8 24 0l238 158q10 7 10 19v158q0 12-10 19L412 656q-12 8-24 0L150 497q-10-7-10-19zm282-274v104l97 65 78-52zm-44 104V204L203 321l78 52zm-193 54v75l56-37zm193 234V492l-97-65-78 52zm22-143l79-53-79-53-79 53zm22 143l175-117-78-52-97 64v105zm193-159v-75l-56 38z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#1" className="social-link">
          <svg viewBox="0 0 800 800" aria-hidden="true">
            <title>YouTube</title>
            <path d="M400 224c144 0 201 2 224 25 17 17 26 52.125 26 151s-9 134-26 151c-23 23-80 25-224 25s-201-2-224-25c-17-17-26-52.125-26-151s9-134 26-151c23-23 80-25 224-25zm-52 100v141l135-70z" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
