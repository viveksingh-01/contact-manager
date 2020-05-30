import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header(props) {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-2">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          {branding}
        </NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" exact={true} className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link">
              Add
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: 'Contact Manager'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
