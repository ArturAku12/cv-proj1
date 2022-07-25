import React, { useState } from 'react';
import EducationEntries from "./EducationEntries.js"; 
import EducationInput from "./EducationInput.js";
import uniqid from 'uniqid';

const Education = (props) => {

    const [education, setEducation] = useState({
        school: "UBC ",
        years: "2016-2018 ",
        subject: "Engineering ",
        edit: false,
        id: uniqid(),
    })

    const [entries, setEntries] = useState([]);

    return (
        <div>
            {console.log("render_work")}
            <EducationInput education = {education} setEducation={setEducation} entries={entries} setEntries={setEntries}/>
            <EducationEntries entries = {entries} setEntries = {setEntries} />
        </div>
    )
}

export default Education;