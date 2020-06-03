import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>"Hello I am here"</p>
                <input placeholder='Add a Knife'></input><button className='addKnifeBtn'>GO!</button>
            </div>
        )
    }
}

export default Input;
