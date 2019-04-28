import React, {Component} from 'react';
import './header.scss';

class Header extends Component {

    render() {
        return (
            <header>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
                    alt="React logo"/>
                <h1>React App for Visualization Results of Checking Site for Audit Data</h1>
            </header>
        )
    }
}

export default Header;
