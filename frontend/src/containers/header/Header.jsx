import React from 'react';
import ai from '../../assets/ai2.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Tired of getting wrong answers on GPT</h1>
      <p>Here goes the real Uttar.Ai for your all questions of Database Management System</p>
      <div className="gpt3__header-content__input">
        <input type="text" placeholder="Enter PRN" />
        <button type="button">SignUp</button>
      </div>
    </div>

    <div className="gpt3__header-image vert-move">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
