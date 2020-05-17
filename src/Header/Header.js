import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import MediaQuery from 'react-responsive';
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

  onMenuItemClick = (menuItem) => {
    this.props.onMenuItemClick(menuItem, false);
  }

  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <MediaQuery maxDeviceWidth={767}><div className="menu-icon"><HamburgerMenu
            isOpen={this.props.isMenu}
            menuClicked={this.handleMenuClick}
            width={32}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          /></div></MediaQuery>
          <div className="logo-icon">
            <MediaQuery maxDeviceWidth={767}><img width="135px" height="75px" src={ logoIcon } alt="App Logo" /></MediaQuery>
            <MediaQuery minDeviceWidth={768}><img width="255px" height="135px" src={ logoIcon } alt="App Logo" /></MediaQuery>
          </div>
          <MediaQuery minDeviceWidth={768}>
            <div className="menu-options">
              <ul>
                  <li onClick={() => this.onMenuItemClick('home')}> HOME </li>
                  <li onClick={() => this.onMenuItemClick('aboutus')}> ABOUT US </li>
                  <li onClick={() => this.onMenuItemClick('contactus')}> CONTACT US </li>
              </ul>
            </div>
          </MediaQuery>
        </header>
      </div>
    );
  }
}

export default Header;
