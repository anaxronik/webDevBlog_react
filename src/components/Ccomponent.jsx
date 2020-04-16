import React, { Component } from 'react'

export default class Ccomponent extends Component {
    render() {
        return (
            <div>
                <div>Ccomponent {this.props.name}</div>
                <div> Numbers = {this.props.number}</div>
            </div>
        )
    }
}

Ccomponent.defaultProps = {
    name: 'Sergey',
    number: [1, 2, 3, 4]
}