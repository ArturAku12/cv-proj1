import React, { useState, useEffect } from 'react';
import uniqid from "uniqid";

const Work2 = () => {
    const [work, setWork] = useState({
        place: "Ellex Raidla ",
        position: "Intern ",
        months_of_experience: "2 ",
        tasks: "Dancing, working...",
        edit: false,
        id: uniqid(),
    })

    const [entries, setEntries] = useState([]);



    const handleInput = (event) => {
        const { name, value } = event.target;
        setWork({
            ...work,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (work.position !== "" && work.place !== "" && work.months_of_experience !== "" && work.tasks !== "") {setEntries((entries) => [...entries, work])
        setWork({
            ...work, 
            place: "",
            position: "",
            months_of_experience: "",
            tasks: "",
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
                <input type="text" placeholder="Place" value = {work.place} name = "place" onChange={handleInput}/> <br/>
                <input type="text" placeholder="Position" value = {work.position} name = "position" onChange={handleInput}/> <br/>
                <input type="text" placeholder="Months worked" value = {work.months_of_experience} name = "months_of_experience" onChange={handleInput}/> <br/>
                <input type="text" placeholder="Tasks performed" value = {work.tasks} name = "tasks" onChange={handleInput}/> <br/>
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
                                        <input type="text" name="entry.place" defaultValue = {entry.place} onChange={(event) => { entry.place = event.target.value; }} /><br/>
                                        <input type="text" name="entry.position" defaultValue = {entry.position} onChange={(event) => { entry.position = event.target.value; }} /><br/>
                                        <input type="text" name="entry.months_of_experience" defaultValue = {entry.months_of_experience} onChange={(event) => { entry.months_of_experience= event.target.value; }}/><br/>
                                        <input type="text" name="entry.tasks" defaultValue = {entry.tasks} onChange={(event) => { entry.tasks = event.target.value; }}/><br/>
                                    </form>
                                </div>
                                : 
                                <div>
                                   <h2>Place of work: {entry.place}</h2>
                                    <p>Number of months worked: {entry.months_of_experience} <br></br>
                                    <u>Position: {entry.position}</u></p>
                                    <p>Tasks performed: {entry.tasks}</p>
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

export default Work2;