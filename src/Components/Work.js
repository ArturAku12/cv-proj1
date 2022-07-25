import React, { useState } from 'react';
import WorkEntries from "./WorkEntries.js"; 
import WorkInput from "./WorkInput.js";
import uniqid from 'uniqid';

const Work = (props) => {

    const [work, setWork] = useState({
        place: "Ellex Raidla ",
        position: "Intern ",
        months_of_experience: "2 ",
        tasks: "Dancing, working...",
        edit: false,
        id: uniqid(),
    })


    const [entries, setEntries] = useState([]);

    return (
        <div>
            {console.log("render_work")}
            <WorkInput work = {work} setWork={setWork} entries={entries} setEntries={setEntries}/>
            <WorkEntries entries = {entries} setEntries = {setEntries} />
        </div>
    )
}

export default Work;