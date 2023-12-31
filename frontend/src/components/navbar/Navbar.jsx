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
        <div className="gpt3__navbar-links_container">
          <p><a href='/' className='hover text-xl'>
            Uttar.Ai
          </a>
          </p>
          {(localStorage.getItem("authToken")) ? (
            <Link to={'/generate-quiz'} className='hover'>
            <p>Generate-Quiz</p>
          </Link>
          ) : (
            <Link to={'/login'} className='hover'>
            <p>Generate-Quiz</p>
          </Link>
          )}
          

          <Link to={"https://ai.google/why-ai/"} className='hover'>
            <p>What is AI?</p>
          </Link>
          <p><a href="https://github.com/3P-s/Mini-Project" className='hover'>Github</a></p>
          <p><a href="https://github.com/3P-s" className='hover'>About Us</a></p>
          {(localStorage.getItem("authToken")) ? (
            <Link to={'/chat'} className='hover'>
            <p>ChatBot {'->'}</p>
          </Link>
          ) : (
            <Link to={'/login'} className='hover'>
            <p>ChatBot {'->'}</p>
          </Link>
          )}
          
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
              <p><a href='/' className='hover text-xl'>
                Uttar.Ai
              </a>
              </p>

              <Link to={'/generate-quiz'} className='hover'>
                <p>Generate-Quiz</p>
              </Link>

              <Link to={"https://ai.google/why-ai/"} className='hover'>
                <p>What is AI?</p>
              </Link>
              <p><a href="https://github.com/3P-s/Mini-Project" className='hover'>Github</a></p>
              <p><a href="https://github.com/3P-s" className='hover'>About Us</a></p>
              <Link to={'/chat'} className='hover'>
                <p>ChatBot {'->'}</p>
              </Link>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
