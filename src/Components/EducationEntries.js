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


    const mapEntries = (entries) => {
        for (let i = 0; i < 500000000; i++) {}
        return (
            <div>
                {entries ? <div> {entries.map((entry) => {
                    let edit_school = entry.school;
                    let edit_years = entry.years;
                    let edit_subject = entry.subject;
                    return (
                        <div key={entry.id}>
                            
                            <div className="App-header">
                                <button type="submit" onClick={() => { handleDelete(entry) }}>Delete</button>
                                <button type="submit" onClick={() => { toggleEdit(entry) }}>Edit</button>
                                { entry.edit ?
                                    <div> 
                                        <form type ="submit" onSubmit={(event) => {
                                                                                    event.preventDefault();
                                                                                    let index = entries.indexOf(entry);
                                                                                    let array = [...entries]
                                                                                    array[index] = {school: edit_school,
                                                                                                    years: edit_years,
                                                                                                    subject: edit_subject,
                                                                                                    id: entry.id,
                                                                                                    edit: !entry.edit}
                                                                                    setEntries((entries) => array)
                                                                                    }}>
                                            <input type="text" name="school" defaultValue = {edit_school} onChange={(event) =>{ edit_school = event.target.value;}}/><br/>
                                            <input type="text" name="years" defaultValue = {edit_years} onChange={(event) => { edit_years = event.target.value }}/><br/>
                                            <input type="text" name="subject" defaultValue = {edit_subject} onChange={(event) => { edit_subject = event.target.value }}/><br/>
                                            <input type="submit" name="Submit"></input>
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
                } </div>: null}
            </div>
        )
    }

    const MemoMapEntries = useMemo(() => mapEntries(entries), [entries] );

    return (
        <div>
           {MemoMapEntries}
        </div>
)
}

export default EducationEntries;