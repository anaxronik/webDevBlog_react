import React, { Component } from 'react'

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
            <div>
                {this.state.isVisible
                    ? <div><h1>State = {this.state.name}</h1></div>
                    : <h1>...</h1>}
                <button onClick={this.buttonClick} >Add 'a'</button>
                <button onClick={this.changeVisible} >Set visible</button>

                <div>
                    <h2>count = {this.state.count}</h2>
                    <button onClick={this.decrement} >-1</button>
                    <button onClick={this.reset} >reset</button>
                    <button onClick={this.increment} >+1</button>

                </div>
            </div>
        )
    }
}

Ccomponent.defaultProps = {
    name: 'Sergey',
    number: [1, 2, 3, 4]
}