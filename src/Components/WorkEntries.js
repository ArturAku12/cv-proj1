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

    const handleEdit = (event, element) => {
        let index = entries.indexOf(element);
        const array = [...entries];
        let entry = array[index];
        entry[event.target.name] = event.target.value;
        setEntries((entries) => array);

    }
    
    const mapEntries = () => {
        return (
            <div>
                {entries ? <div> {entries.map((entry) => {
                    return (
                        <div key={entry.id}>
                            <div className="App-header">
                                <button type="submit" onClick={() => { handleDelete(entry) }}>Delete</button>
                                <button type="submit" onClick={() => { toggleEdit(entry) }}>Edit</button>
                                { entry.edit ?
                                    <div> 
                                        <form>
                                            <input type="text" name="place" defaultValue = {entry.place} onChange={(event) => { handleEdit(event, entry) }} /><br/>
                                            <input type="text" name="position" defaultValue = {entry.position} onChange={(event) => { handleEdit(event, entry) }} /><br/>
                                            <input type="text" name="months_of_experience" defaultValue = {entry.months_of_experience} onChange={(event) => { handleEdit(event, entry) }}/><br/>
                                            <input type="text" name="tasks" defaultValue = {entry.tasks} onChange={(event) => { handleEdit(event, entry) }}/><br/>
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