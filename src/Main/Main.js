import React, { Component } from 'react';
import Routes from './Routes';
import Menu from './Menu';
import './Main.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.isMenu = nextProps.isMenu;
        this.onMenuItemClick = nextProps.onMenuItemClick;
    }

    onMenuItemClick = (menuItem) => {
        this.props.onMenuItemClick(menuItem);
    }

    render() {
        let component = this.isMenu ? <Menu onMenuItemClick={this.onMenuItemClick}/> : <Routes />;
        return (   
            <div className="App-main">
                <div className="main-content">
                    {component}
                </div>
            </div>
        );
    }
}

export default Main;
