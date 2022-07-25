import React, { useMemo } from 'react';
import uniqid from 'uniqid';

const EducationInput = (props) => {
    const { education, setEducation, entries, setEntries } = props;

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
            school: "",
            years: "",
            subject: "",
            edit: false,
            id: uniqid(),
        })
    }
    }

    return (
        <div>
            <form type="submit" onSubmit={handleSubmit}>
                <input type="text" placeholder="School" value = {education.school} name = "school" onChange={handleInput}/> <br/>
                <input type="text" placeholder="Years" value = {education.years} name = "years" onChange={handleInput}/> <br/>
                <input type="text" placeholder="Subject" value = {education.subject} name = "subject" onChange={handleInput}/> <br/>
                <input type="submit" name="Submit"></input>
            </form>
        </div>
    )


}

export default EducationInput;