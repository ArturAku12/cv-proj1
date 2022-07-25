import React, { useMemo } from 'react';

const EducationEntries = (props) => {
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
                                        <input type="text" name="school" defaultValue = {entry.school} onChange={(event) => { handleEdit(event, entry) }} /><br/>
                                        <input type="text" name="years" defaultValue = {entry.years} onChange={(event) => { handleEdit(event, entry) }}/><br/>
                                        <input type="text" name="subject" defaultValue = {entry.subject} onChange={(event) => { handleEdit(event, entry) }}/><br/>
                                    </form>
                                </div>
                                : 
                                <div>
                                 <div>
                                    <h2>School: {entry.school}</h2>
                                    <p>Years studied: {entry.years} &nbsp;&nbsp;&nbsp;
                                    <u>Subject: {entry.subject}</u></p>
                                </div>
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

    const memoMapEntries = useMemo(() => mapEntries(), [entries]);

    return (
        <div>
            {memoMapEntries}
        </div>
)
}

export default EducationEntries;