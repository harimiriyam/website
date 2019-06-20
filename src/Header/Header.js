import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import logoIcon from '../logoIcon.png';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick = () => {
    this.props.handleMenuClick();
  }

  render() {
    
    return (
      <div className="Header">
        <header className="App-header">
          <div className="menu-icon"><HamburgerMenu
            isOpen={this.props.isMenu}
            menuClicked={this.handleMenuClick}
            width={32}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          /></div>
          <div className="logo-icon">
            <img width="80%" height="80%" src={ logoIcon } alt="App Logo" />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
