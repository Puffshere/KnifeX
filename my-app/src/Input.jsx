import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Welcome to KnifeX</h1>
                <input placeholder='Add a Knife'></input><button className='addKnifeBtn'>GO!</button>
                <br></br>
                <input placeholder='Search for a Knife'></input><button className='addKnifeBtn'>GO!</button>
            </div>
        )
    }
}

export default Input;
