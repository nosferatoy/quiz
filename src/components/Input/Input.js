import React, { Component } from 'react';
import './Input.css';

const ReactDOM = require('react-dom')

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount = () => {
        let cursor = document.getElementById("cursor");
        window.setInterval(() => {
            if(document.activeElement === ReactDOM.findDOMNode(this.mainInput)) {
                if(cursor.style.visibility === 'visible') {
                    cursor.style.visibility = 'hidden';
                } else {
                    cursor.style.visibility = 'visible';
                }
            } else {
                cursor.style.visibility = 'visible';
            }
        }, 500);
    }

    onItemClick = () => {
        this.mainInput.focus();
    }

    handleSubmit(event) {
        this.props.onSubmit(event, this.state.value);
        this.setState({value: ''});
        this.mainInput.value = "";
    }

    handleOnInput = (event) => {
        this.setState({ value:  this.mainInput.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false">
                <div id="cmd" onClick={this.onItemClick}>
                    <span>$ {this.state.value}</span>
                    <div id="cursor"></div>
                </div>
                <input type="text" name="command" 
                       ref={(ref) => this.mainInput= ref}
                       onChange={this.handleOnInput}  
                       autoFocus/>
            </form>
        )
    }

}

export default Input;