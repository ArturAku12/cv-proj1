import React, { useState, useEffect } from 'react';
import uniqid from "uniqid";

const Education2 = () => {
    const [education, setEducation] = useState({
        school: "UBC ",
        years: "2016-2018 ",
        subject: "Engineering ",
        edit: false,
        id: uniqid(),
    })

    const [entries, setEntries] = useState([]);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setEducation({
            ...education,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (education.school !== "" && education.years !== "" && education.subject !== "") {setEntries((entries) => [...entries, education])
        setEducation({
            ...education,
            school: "",
            years: "",
            subject: "",
            edit: false,
            id: uniqid(),
        })
    }
    }
    
    const handleDelete = (element) => {
        let array = [...entries];
        let index = array.indexOf(element)
        if (index !== -1) {
            array.splice(index, 1)
            setEntries((entries) => array)
        }
    }
    
    const toggleEdit = (element) => {
        let array = [...entries];
        let index = array.indexOf(element);
        array[index].edit = !array[index].edit;
        setEntries((entries) => array);
    }

    return (
        <div>
            <form type="submit" onSubmit={handleSubmit}>
                <input type="text" placeholder="School" value = {education.school} name = "school" onChange={handleInput}/> <br/>
                <input type="text" placeholder="Years" value = {education.years} name = "years" onChange={handleInput}/> <br/>
                <input type="text" placeholder="Subject" value = {education.subject} name = "subject" onChange={handleInput}/> <br/>
                <input type="submit" name="Submit"></input>
            </form>
            {entries.map((entry) => {
                return (
                    <div key={entry.id}>
                        <div className="App-header">
                               <button type="submit" onClick={() => { handleDelete(entry) }}>Delete</button>
                               <button type="submit" onClick={() => { toggleEdit(entry) }}>Edit</button>
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
                    </div>
                )
            })
            }
        </div>
    )
}

export default Education2;