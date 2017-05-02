import React, { Component } from "react"

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {text: []}
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        fetch("/demo")
            .then(res => res.json())
            .then(text => this.setState({ text }))
    }

    render() {
        return (
            <div className="App">
                <h1>API</h1>
                <div className="api__frontend">
                    This text is in your browser. Let's grab something from a separate server:<br />
                    <button onClick={() => this.clickHandler()}>Make API GET request</button>
                </div>
                <hr />
                <div className="api__backend">
                    {this.state.text.map(text =>
                        <div key={text.id}>{text.body}</div>
                    )}
                </div>



            </div>
        )
    }
}

export default Api