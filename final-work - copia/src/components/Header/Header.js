import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>UTN</h1>
            <div className='btn'>
            <Link to="/signIn" className="btn btn-primary">Login</Link>
              <Link to="/signUp" className="btn btn-ligth">Sign up</Link>
                <button className='btn btn-primary'>Log In</button>
                <button className='btn btn-light'>Sign In</button>
            </div>
        </div>
    );
};

export default Header;
