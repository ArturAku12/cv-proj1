import React, { useMemo } from 'react';

const WorkEntries = (props) => {
    const { entries, setEntries } = props;

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
    
    const mapEntries = () => {
        return (
            <div>
                {entries ? <div> {entries.map((entry) => {
                    let edit_place = entry.place;
                    let edit_position = entry.position;
                    let edit_months_of_experience = entry.months_of_experience;
                    let edit_tasks = entry.tasks
                    return (
                        <div key={entry.id}>
                            <div className="App-header">
                                <button type="submit" onClick={() => { handleDelete(entry) }}>Delete</button>
                                <button type="submit" onClick={() => { toggleEdit(entry) }}>Edit</button>
                                { entry.edit ?
                                    <div> 
                                        <form type = "submit" onSubmit={(event) => {
                                                                                    event.preventDefault();
                                                                                    let index = entries.indexOf(entry);
                                                                                    let array = [...entries]
                                                                                    array[index] = {place: edit_place,
                                                                                        position: edit_position,
                                                                                        months_of_experience: edit_months_of_experience,
                                                                                        tasks: edit_tasks, 
                                                                                        id: entry.id, 
                                                                                        edit: !entry.edit};
                                                                                    setEntries((entries) => array);
                                                                                    }}>
                                            <input type="text" name="place" defaultValue = {edit_place} onChange={(event) => { edit_place = event.target.value}} /><br/>
                                            <input type="text" name="position" defaultValue = {edit_position} onChange={(event) => { edit_position = event.target.value}} /><br/>
                                            <input type="text" name="months_of_experience" defaultValue = {edit_months_of_experience} onChange={(event) => { edit_months_of_experience = event.target.value}}/><br/>
                                            <input type="text" name="tasks" defaultValue = {edit_tasks} onChange={(event) => { edit_tasks = event.target.value}}/><br/>
                                            <input type="submit" name="Submit"></input>
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
                } </div>: null}
            </div>
        )
    }

    const memoMapEntries = useMemo(() => mapEntries(), [entries])

    return (
        <div>
            {memoMapEntries}
        </div>
    )
}

export default WorkEntries;