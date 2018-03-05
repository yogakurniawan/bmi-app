import React from 'react'
import logo from '../images/logo.svg'

const Header = props =>
  <div className="c-header">
    <img src={logo} className="c-header__logo" alt="create-react-redux-app-logo" />
    <h2>Example APP</h2>
  </div>;

export default Header
