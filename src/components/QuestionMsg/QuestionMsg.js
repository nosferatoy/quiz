import React, { Component } from 'react';
import './QuestionMsg.css'
class QuestionMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.msg.split('').forEach((element, index) => {
            setTimeout(function(){            
                let node = document.createElement("SPAN");
                let textnode = document.createTextNode(element);
                node.appendChild(textnode);
                node.style.display = 'inline';
                node.style.color = 'green';
                node.animate([ { opacity: 0 }, { opacity: 1 }], { duration: 100 });
                document.getElementById("cssTyping").appendChild(node);
            }, 100 * index)
        });
    }

    render() {
        return (
            <div id="cssTyping"></div>
        )
    }

}

export default QuestionMsg;