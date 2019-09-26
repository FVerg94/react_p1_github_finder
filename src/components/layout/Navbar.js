import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </div>
  );
};

// Default props values
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

// Indicate the type the props must have, and if they are mandatory or not
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
