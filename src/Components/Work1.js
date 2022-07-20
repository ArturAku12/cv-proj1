import React from 'react';
import uniqid from 'uniqid';
class Work1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work: {
                id: uniqid(),
                place: "Ellex Raidla",
                number_of_months: "2 months",
                position: "Intern",
                tasks: ["dance, write"],
                edit: false,
            },
            entries: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    handleChange(event) {
        this.setState({
            work: {
                ...this.state.work,
                [event.target.name]: event.target.value,
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            entries: [...this.state.entries, this.state.work],
        })
        this.setState({
            work: {
                place: '',
                number_of_months: '',
                position: '',
                tasks: [],
                id: uniqid()
            }
        })
    }
    handleDelete(element) {
        let array = [...this.state.entries];
        let index = array.indexOf(element)
        if (index !== -1) {
            array.splice(index, 1)
            this.setState({entries: array})
        }
    }
    toggleEdit(element) {
        let array = [...this.state.entries];
        let index = array.indexOf(element);
        array[index].edit = !array[index].edit;
        this.setState({entries: array});
    }

    render() {
        return (
            <div className="App-header">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="place" placeholder="Place" value={this.state.work.place} onChange={this.handleChange}></input><br/>
                    <input type="text" name="number_of_months" placeholder="Number of months" value={this.state.work.number_of_months} onChange={this.handleChange}></input><br/>
                    <input type="text" name="position" placeholder="Position" value={this.state.work.position} onChange={this.handleChange}></input><br/>
                    <input type="text" name="tasks" placeholder="Tasks" value={this.state.work.tasks} onChange={this.handleChange}></input><br/>
                    <input type="submit" name="Submit"/>
                </form>
                {this.state.entries.map((entry) =>{
                        return (
                            <div key = {entry.id} className="App-header">
                               <button type="submit" onClick={() => { this.handleDelete(entry) }}>Delete</button>
                               <button type="submit" onClick={() => { this.toggleEdit(entry) }}>Edit</button>
                               { entry.edit ?
                                <div> 
                                    <form>
                                        <input type="text" name="entry.place" defaultValue = {entry.place} onChange={(event) => { entry.place = event.target.value; }} /><br/>
                                        <input type="text" name="entry.number_of_months" defaultValue = {entry.number_of_months} onChange={(event) => { entry.number_of_months = event.target.value; }}/><br/>
                                        <input type="text" name="entry.position" defaultValue = {entry.position} onChange={(event) => { entry.position = event.target.value; }}/><br/>
                                        <input type="text" name="entry.tasks" defaultValue = {entry.tasks} onChange={(event) => { entry.tasks = event.target.value; }}/><br/>
                                    </form>
                                </div>
                                : 
                                <div>
                                    <h2>Place of work: {entry.place}</h2>
                                    <p>Number of months worked: {entry.number_of_months} <br></br>
                                    <u>Position: {entry.position}</u></p>
                                    <p>Tasks performed: {entry.tasks}</p>
                                </div>
                               }
                                <br></br>
                            </div>
                        )
                    })}
            </div>
        )
    }

}

export default Work1;