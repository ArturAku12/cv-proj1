import React from 'react';
import uniqid from "uniqid";


class Education1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            education: {
                id: uniqid(),
                school: "KCL",
                years: "2018-2021",
                subject: "Law",
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
            education: {
                ...this.state.education,
                [event.target.name]: event.target.value,
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            entries: [...this.state.entries, this.state.education],
        })
        this.setState({
            education: {
                school: '',
                years: '',
                subject: '',
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
                    <input type="text" name="school" placeholder="School" value = {this.state.education.school} onChange={this.handleChange}/><br/>
                    <input type="text" name="years" placeholder="Years" value = {this.state.education.years} onChange={this.handleChange}/><br/>
                    <input type="text" name="subject" placeholder="Subject" value = {this.state.education.subject} onChange={this.handleChange}/><br/>
                    <input type="submit" value = "Submit" />
                </form>
                    {this.state.entries.map((entry) =>{
                        return (
                            <div key = {entry.id} className="App-header">
                               <button type="submit" onClick={() => { this.handleDelete(entry) }}>Delete</button>
                               <button type="submit" onClick={() => { this.toggleEdit(entry) }}>Edit</button>
                               { entry.edit ?
                                <div> 
                                    <form>
                                        <input type="text" name="entry.school" defaultValue = {entry.school} onChange={(event) => { entry.school = event.target.value; }} /><br/>
                                        <input type="text" name="entry.years" defaultValue = {entry.years} onChange={(event) => { entry.years = event.target.value; }}/><br/>
                                        <input type="text" name="entry.school" defaultValue = {entry.subject} onChange={(event) => { entry.subject = event.target.value; }}/><br/>
                                    </form>
                                </div>
                                : 
                                <div>
                                    <h2>School: {entry.school}</h2>
                                    <p>Years studied: {entry.years} &nbsp;&nbsp;&nbsp;
                                    <u>Subject: {entry.subject}</u></p>
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

export default Education1