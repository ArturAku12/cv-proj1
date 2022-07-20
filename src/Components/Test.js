import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value1: [], value2: [], temp_value1: "", temp_value2: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({value1: [...this.state.value1, this.state.temp_value1]})
      }

    render() {
        return (
            <div className="App-header">
                <form onSubmit={this.handleSubmit}>
                    <label>Fun form
                        <br/>
                    <input type="text" name = "temp_value1" value={this.temp_value1} onChange={this.handleChange}/>
                    </label>
                    <input type = "Submit" value = "Find fun"/>
                    <br/>
                </form>
                <ul>
                    {this.state.value1.map((valu) => {
                        return <li>{valu}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Test; 