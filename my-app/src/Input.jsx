import React, { Component } from 'react';
import Modal from './Modal';
import './App.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            header: "Here is where we add the knive's details",
            footer: "Happy Collecting",
            desc: "Hello! I am modal box"
        };
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div className='inputSize'>
                <h1 className='titleEffects'>Welcome to KnifeX</h1>
                <Modal show={this.state.show} handleClose={this.hideModal} header={this.state.header} footer={this.state.footer} desc={this.state.desc}>
                </Modal>
                <input placeholder='Add a Knife'></input>
                <button type="button" onClick={this.showModal} className='addKnifeBtn'>GO!</button>
                <br></br>
                <input placeholder='Search for a Knife'>
                </input>
                <button className='addKnifeBtn'>GO!</button>
            </div>
        )
    }
}

export default Input;
