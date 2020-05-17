import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu : false
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    
    handleMenuClick = () => {
        this.setState({
            isMenu: !this.state.isMenu
        });
    }

    onMenuItemClick = (menuItem, isMobile) => {
        console.log('isMobile :'+isMobile);
        this.setState({
            isMenu: isMobile && !this.state.isMenu
        });

        this.props.history.push(menuItem);
    }

    render() {
        return(
        <div className="App">
            <Header handleMenuClick={this.handleMenuClick} onMenuItemClick={this.onMenuItemClick} isMenu={this.state.isMenu}/>
            <Main onMenuItemClick={this.onMenuItemClick} isMenu={this.state.isMenu}/>
            <Footer />
        </div>
        )
    }
}

export default withRouter(App);
