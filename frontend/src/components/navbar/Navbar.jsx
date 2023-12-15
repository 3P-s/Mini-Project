import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate()
  const logout = () => {
    console.log('loggin out');
    localStorage.removeItem("authToken");
    navigate("/login")
  }

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div> */}
        <div className="gpt3__navbar-links_container">
        <a href='/' className='glow'> 
              <p>Uttar.Ai</p>
        </a>
          <Link to={'/generate-quiz'}> 
              <p>Lets-Generate-Quiz</p>
          </Link>
          <Link to={"https://ai.google/why-ai/"}> 
              <p>What is AI?</p>
          </Link>
          <Link to={'/generate-quiz'}> 
              <p>ChatBot</p>
          </Link>
          <p><a href="https://github.com/3P-s/Mini-Project  ">Github</a></p>
          <p><a href="https://github.com/3P-s">About Us</a></p>
        </div>
      </div>
      {(localStorage.getItem("authToken")) ? (
        <div className="gpt3__navbar-sign">
          <button className='m-1' type="button" onClick={logout}>Sign out</button>
        </div>
      ) : (
        <div className="gpt3__navbar-sign">
          <Link to={'login'}>
            <button className='m-1' type="button">Sign in</button>
          </Link>
          <Link to={'signup'}>
            <button className='m-1' type="button">Sign up</button>
          </Link>
        </div>
      )}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button type="button">Sign up</button>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
