import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
}

Header.defaultProps = {
  branding: 'Contact Manager'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
