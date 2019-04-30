import React, { Component } from 'react';
import '../css/MyButton.css';

class MyButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className="styleButton">{this.props.content}</button>
            </div>
        );
    }
}

export default MyButton;