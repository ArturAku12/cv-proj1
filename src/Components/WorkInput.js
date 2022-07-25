import React, { useMemo } from 'react';
import uniqid from 'uniqid';

const WorkInput = (props) => {
    const { work, setWork, entries, setEntries } = props;
    
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
            place: "",
            position: "",
            months_of_experience: "",
            tasks: "",
            edit: false,
            id: uniqid(),
        })
    }
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
            <br/>
        </div>
    )
}


export default WorkInput;