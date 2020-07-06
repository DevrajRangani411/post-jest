import React from "react";
import PropTypes from 'prop-types'

function Header({logo}) {
  return (
    <nav class="navbar navbar-light bg-light" data-test="header">
      <span class="navbar-brand mb-0 h1" data-test="logo">{logo}</span>
    </nav>
  );
}

Header.propType={
  logo: PropTypes.string
}

export default Header;
