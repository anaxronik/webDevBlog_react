import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            submit: '',
            items: []
        }

    }

    changeInput = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    submit = (event) => {
        event.preventDefault()
        this.setState({
            submit: this.state.input,
            items: [...this.state.items, this.state.input],
            input: '',
        })
    }

    render() {
        return (
            <div className='block'>
                <h1>Form component</h1>
                {this.state.submit ? 'Last submit: ' + this.state.submit : ''}
                <div>
                    <ul>
                        {this.state.items.map(
                            (item) => (
                                < li key={item} > {item}</li>
                            )
                        )}
                    </ul>
                </div>
                <form onSubmit={this.submit}>
                    <h5>Controled input: {this.state.input}</h5>
                    <input
                        type="text"
                        onChange={this.changeInput}
                        value={this.state.input}
                    />
                    <button type="submit">submit</button>
                </form>
            </div >
        )
    }
}
