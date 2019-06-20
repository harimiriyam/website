import React from 'react';
import './Main.css';
import './Menu.css';

function Menu(props) {
  return (
    <div className="App-main">
        <div className="main-content">
            <ul className="menu-items">
                <li onClick={() => props.onMenuItemClick('home')}> HOME </li>
                <li onClick={() => props.onMenuItemClick('aboutus')}> ABOUT US </li>
                <li onClick={() => props.onMenuItemClick('contactus')}> CONTACT US </li>
            </ul>
        </div>
    </div>
  );
}

export default Menu;
