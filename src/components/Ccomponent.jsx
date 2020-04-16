import React, { Component } from 'react'
import './Ccomponent.css'
import Button from '@material-ui/core/Button';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Alex',
            isVisible: true,
            count: 0,
        }
    }

    buttonClick = () => {
        this.setState({
            name: this.state.name + 'a'
        })
    }

    changeVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }



    render() {
        return (
            <div className='block'>
                {this.state.isVisible
                    ? <h1 className='hello'>State = {this.state.name}</h1>
                    : <h1>...</h1>}
                <button onClick={this.buttonClick} >Add 'a'</button>
                <button onClick={this.changeVisible} >Set visible</button>

                <div>
                    <h2>count = {this.state.count}</h2>
                    <Button variant="contained" color="primary" onClick={this.decrement} >-1</Button>
                    <Button variant="contained" onClick={this.reset} >reset</Button>
                    <Button variant="contained" color="secondary" onClick={this.increment} >+1</Button>
                </div>
            </div>
        )
    }
}

Ccomponent.defaultProps = {
    name: 'Sergey',
    number: [1, 2, 3, 4]
}